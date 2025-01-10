# 30 Days DevOps Challenge - Weather Dashboard  
**Day 1: Building a Weather Data Collection System using AWS S3 and OpenWeather API**

## Overview  
Welcome to the **30 Days DevOps Challenge**! This project marks **Day 1** of the challenge, where we focus on building a **Weather Data Collection System**. The system retrieves weather information for a list of cities using the **OpenWeather API**, displays the data, and stores it in an AWS S3 bucket.

This project introduces key concepts in **DevOps** such as automation, cloud storage, and API integration.

---

## Features  
- Dynamically fetches weather data for a list of cities.
- Displays the collected weather data in the terminal.
- Automatically creates an AWS S3 bucket if it does not exist.
- Stores the weather data in a structured JSON format in the S3 bucket.

---

## Prerequisites  
1. **Node.js** installed on your system.  
2. An **AWS account** with credentials configured.  
3. An **OpenWeather API key**.  

---

## Directory Structure  
```plaintext
WEATHERAPIS3/
├── .env                  # Environment variables for sensitive data
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Lock file for dependencies
├── config/
│   └── awsConfig.js      # AWS S3 configuration
├── weather.js            # Main script for fetching and storing weather data
└── README.md             # Project documentation


# Setup Instructions

## 1. Clone the Repository
```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

## 2. Install Dependencies
```bash
npm install
```

## 3. Create a `.env` File
Create a `.env` file in the root directory of the project and add the following environment variables:

```plaintext
AWS_ACCESS_KEY_ID=<your-aws-access-key-id>
AWS_SECRET_ACCESS_KEY=<your-aws-secret-access-key>
AWS_REGION=<your-aws-region>
OPENWEATHER_API_KEY=<your-openweather-api-key>
S3_BUCKET=weather-data-bucket
```

Replace the placeholders (`<your-aws-access-key-id>`, `<your-aws-secret-access-key>`, `<your-aws-region>`, `<your-openweather-api-key>`) with your actual AWS and OpenWeather API credentials.

## 4. Run the Script
```bash
node weather.js
```
```

### Explanation of the `.env` File

- **`AWS_ACCESS_KEY_ID`**: Your AWS access key ID.
- **`AWS_SECRET_ACCESS_KEY`**: Your AWS secret access key.
- **`AWS_REGION`**: The AWS region where your S3 bucket will be created (e.g., `us-east-1`).
- **`OPENWEATHER_API_KEY`**: Your API key from OpenWeather.
- **`S3_BUCKET_NAME`**: The name of the S3 bucket where weather data will be stored (e.g., `weather-data-bucket`).


# What Happens When You Run the Script?

## 1. **Bucket Creation**
- The script checks if the specified S3 bucket exists.
- If the bucket does not exist, it creates the bucket in the specified AWS region.

## 2. **Weather Data Fetching**
- The script fetches weather reports for a predefined list of cities from the OpenWeather API.
- The data includes:
  - Temperature
  - Humidity
  - Weather condition
  - And more.

## 3. **Data Storage**
- The weather data is saved locally in JSON format.
- The data file is then uploaded to the created S3 bucket.

## 4. **Console Output**
- The script outputs the weather data in the console for your reference.

---

## Example Output
Here’s an example of what the script logs in the console:

```json
{
  "city": "London",
  "temperature": 15.2,
  "humidity": 78,
  "condition": "Cloudy"
}


### Notes

- Ensure that the `.env` file is in the root directory of the project.
- Do not commit the `.env` file to version control (e.g., Git) as it contains sensitive credentials. Add it to your `.gitignore` file if necessary.

```markdown
# .gitignore Example
```plaintext
node_modules/
.env
```
```
