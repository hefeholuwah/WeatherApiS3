# 30 Days DevOps Challenge - Weather Dashboard

![weather API using Boto3  (1)](https://github.com/user-attachments/assets/848f45a9-b504-41dd-9d86-472689c971e3)


**Day 1: Building a Weather Data Collection System Using AWS S3 and OpenWeather API**

## Project Overview  
This project is part of the **30 Days DevOps Challenge**. On Day 1, we built a system to collect weather data for multiple cities using the OpenWeather API, store the data locally, and upload it to an AWS S3 bucket. The system is implemented in Node.js and demonstrates the use of environment variables, API integration, and AWS SDK for S3 operations.

---

## Features  
- Fetches weather data for a list of cities using OpenWeather API.  
- Automatically creates an AWS S3 bucket if it doesn't exist.  
- Uploads the collected weather data to the created S3 bucket.  

---

## Setup Instructions  

### 1. Prerequisites  
- [Node.js](https://nodejs.org/) installed on your system.  
- An AWS account with access credentials.  
- An OpenWeather API key.  

---

### 2. Clone the Repository  
Clone this repository to your local system:  
```bash
git clone https://github.com/hefeholuwah/WeatherApiS3.git
cd WeatherApiS3
```
---

### 3. Install Dependencies  
Run the following command to install all the required dependencies:  
```bash
npm install
```

---

### 4. Create a `.env` File  
Create a `.env` file in the root of the project directory and populate it with the following values:  
```plaintext
AWS_ACCESS_KEY_ID=<your-aws-access-key-id>
AWS_SECRET_ACCESS_KEY=<your-aws-secret-access-key>
AWS_REGION=<your-aws-region>
OPENWEATHER_API_KEY=<your-openweather-api-key>
S3_BUCKET=weather-data-bucket
```

- Replace `<your-aws-access-key-id>` and `<your-aws-secret-access-key>` with your AWS IAM credentials.  
- Replace `<your-aws-region>` with the AWS region (e.g., `us-west-2`).  
- Replace `<your-openweather-api-key>` with your OpenWeather API key.

---

### 5. Run the Script  
Execute the following command to run the script:  
```bash
node weather.js
```

---

## What Happens When You Run the Script?  
1. **Bucket Creation**:  
   - The script checks if the specified S3 bucket exists.  
   - If not, it creates the bucket in the specified region.  

2. **Weather Data Fetching**:  
   - The script fetches weather reports for a predefined list of cities from the OpenWeather API.  
   - The data includes temperature, humidity, weather condition, and more.  

3. **Data Storage**:  
   - The weather data is saved locally in JSON format.  
   - The data file is then uploaded to the created S3 bucket.  

4. **Console Output**:  
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
```

---

## Folder Structure  
```plaintext
WeatherApiS3/
├── weather.js            # Main script
├── config/
│   └── awsconfig.js     # AWS S3 setup and utility functions
├── .env                # Environment variables file
├── package.json        # Node.js dependencies
├── README.md           # Documentation
```

---

## Contributing  
Feel free to fork this repository and make contributions! Open issues or submit pull requests to help improve the project.  

---

## Acknowledgments  
- [AWS SDK for JavaScript](https://aws.amazon.com/sdk-for-javascript/)  
- [OpenWeather API](https://openweathermap.org/api)  


