import React from 'react';

const WeatherComponent = ({ city, guessTemp, weatherData }) => {
  const actualTemp = weatherData?.current?.temp_f;
  const difference = Math.abs(guessTemp - actualTemp).toFixed(1);

  return (
    <div className="weather-card">
      <h2>Weather in {city}</h2>
      <p>Actual Temperature: {actualTemp}°F</p>
      <p>Your Guess: {guessTemp}°F</p>
      <p>You were off by: {difference}°F</p>
      <p>Condition: {weatherData?.current?.condition?.text}</p>
    </div>
  );
};

export default WeatherComponent;
