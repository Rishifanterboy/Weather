# 🌦️ Weather App

A simple and responsive weather application built using HTML, CSS, and JavaScript. This app fetches real-time weather data for any city in the world using the [WeatherAPI](https://www.weatherapi.com/). The app allows users to search for a city, get weather details like temperature, weather condition, and the current local time.

---

## 🚀 Features

- Search any city to get its current weather.
- Displays:
  - Temperature (°C)
  - City name
  - Local date and time
  - Weather condition (e.g., Sunny, Cloudy)
- Clean and responsive UI design.
- Uses the [WeatherAPI](https://www.weatherapi.com/) for live weather data.
- Interactive search bar for real-time updates.
  
---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **API**: [WeatherAPI](https://www.weatherapi.com/)

---

## 📂 Project Structure

```
weather-app/
├── index.html           # Main HTML structure
├── styles.css           # CSS for styling the app
├── index.js             # JavaScript to fetch and display weather data
└── README.md            # Project documentation
```
---
## 🔑 API Key Setup
- Sign up for a free account at WeatherAPI to get your unique API key.

- After signing up, you will receive an API key

- In the index.js file, find the line and Replace yourapikey with the actual API key you received from WeatherAPI:
    let url = `http://api.weatherapi.com/v1/current.json?key=yourapikey&q=${targetPlace}&aqi=no`;

- Now your weather app will be able to fetch weather data for any city using your unique API key.

---

##  🖥️ Usage
Clone the repository to your local machine:

bash

git clone https://github.com/Rishifanterboy/weather-app.git
cd weather-app
Open index.html in your browser.

Enter a city name in the search bar to view the current weather.

---

##  🖌️ Styling
The application is styled using basic CSS to ensure a clean and simple UI. You can easily customize the styles.css file to adjust the colors, fonts, and layout to your liking.

---

## 🧑‍💻 Acknowledgements
WeatherAPI for providing the weather data.

MDN Web Docs for helpful tutorials and references.

---

## Note:
Don't forget to replace the yourapikey placeholder in your index.js with your actual API key from WeatherAPI for the app to fetch data correctly.

---
