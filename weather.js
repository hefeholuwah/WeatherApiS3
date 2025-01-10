const axios = require("axios");
const s3 = require("./config/awsConfig");
require("dotenv").config();

const bucketName = process.env.S3_BUCKET;
const apiKey = process.env.OPENWEATHER_API_KEY;

const cities = ["Abuja", "London", "Texas", "Sydney", "Lagos"]; // List of cities

// Check if the bucket exists and create it if it doesn't
const ensureBucketExists = async () => {
  try {
    const buckets = await s3.listBuckets().promise();
    const bucketExists = buckets.Buckets.some((bucket) => bucket.Name === bucketName);

    if (!bucketExists) {
      console.log(`Bucket "${bucketName}" not found. Creating bucket...`);
      await s3.createBucket({ Bucket: bucketName }).promise();
      console.log(`Bucket "${bucketName}" created successfully.`);
    } else {
      console.log(`Bucket "${bucketName}" already exists.`);
    }
  } catch (error) {
    console.error("Error ensuring bucket existence:", error.message);
    process.exit(1);
  }
};

// Fetch weather data for a city
const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: apiKey,
          units: "metric",
        },
      }
    );
    return {
      city,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      country: response.data.sys.country,
    };
  } catch (error) {
    console.error(`Failed to fetch weather for ${city}:`, error.message);
    return null;
  }
};

// Upload weather data to S3
const uploadToS3 = async (data) => {
  const params = {
    Bucket: bucketName,
    Key: `weather-data-${Date.now()}.json`,
    Body: JSON.stringify(data, null, 2),
    ContentType: "application/json",
  };

  try {
    const result = await s3.upload(params).promise();
    console.log("Data uploaded to S3:", result.Location);
  } catch (error) {
    console.error("Failed to upload to S3:", error.message);
  }
};

// Main function
const main = async () => {
  await ensureBucketExists();

  const weatherData = [];

  for (const city of cities) {
    const data = await fetchWeather(city);
    if (data) {
      console.log(`${data.city}, ${data.country}: ${data.temperature}°C, ${data.description}`);
      weatherData.push(data);
    }
  }

  if (weatherData.length > 0) {
    await uploadToS3(weatherData);
  } else {
    console.log("No data to upload.");
  }
};

main();
