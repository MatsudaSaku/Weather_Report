"use client";

import React, { useState } from "react";

// APIから取得する天気データの型定義
interface WeatherData {
  name: string;
  main: {
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  weather: [
    {
      main: string;
      description: string;
    }
  ];
}

const WeatherPage: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const fetchWeather = async () => {
    if (!city) return;
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      const data: WeatherData = await response.json();

      setWeather(data);
    } catch (error) {
      console.error("天気情報の取得に失敗しました。", error);
      setWeather(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="都市名を入力"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>天気情報を取得する</button>

      {weather && (
        <div>
          <h1>{weather.name}の天気</h1>
          <p>最高気温: {weather.main.temp_max}°C</p>
          <p>最低気温: {weather.main.temp_min}°C</p>
          <p>湿度: {weather.main.humidity}%</p>
          <p>
            天気概要: {weather.weather[0].main} (
            {weather.weather[0].description})
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
