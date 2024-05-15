import React, { useState } from 'react';
import WeatherComponent from '../components/WeatherComponent';
import { fetchWeatherData } from '../lib/weatherAPI';
import Layout from '../components/Layout';

export default function Guess() {
  const [city, setCity] = useState('');
  const [guessTemp, setGuessTemp] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [displayCity, setDisplayCity] = useState('');
  const [displayGuessTemp, setDisplayGuessTemp] = useState('');

  const handleGuess = async () => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      setDisplayCity(city); // Update displayed city only on button click
      setDisplayGuessTemp(guessTemp); // Update displayed temperature guess only on button click
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
    }
  };

  return (
    <Layout>
      <div className="guess-app-container">
        <h1 className="main-title">Welcome to Weather Guesser</h1>
        <div>
          <input
            type="text"
            className="guess-input"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            className="guess-input"
            placeholder="Guess the temperature"
            value={guessTemp}
            onChange={(e) => setGuessTemp(e.target.value)}
          />
          <button className="guess-button" onClick={handleGuess}>Check Weather</button>
          {weatherData && (
            <WeatherComponent city={displayCity} guessTemp={displayGuessTemp} weatherData={weatherData} />
          )}
        </div>
      </div>
    </Layout>
  );
}
