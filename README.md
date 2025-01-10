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
