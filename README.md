This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## About

This project was made my Mattheos Drivas and Quillan Gee for our CPSC 458 Final! Here's a link to our google slides presentation (link).

Heres the link to our deployed Netlify site: https://main--weatherguesserproject.netlify.app/guess

## Design Principles of the Site

# Color Palette
Our site has a dark modern color scheme with a background color of #333, and white text color. Our interactive button elements have gradients. 


# Fonts
Our site uses Roboto, known for its readability and clean appearance. 

# Layout
The layout is structured and clean, with a flex-based setup that centers content and aligns it vertically and horizontally to ensure an organized presentation on various devices. We also have a sidear for navigation

# Purpose of the Site
The site is designed to engage users in an interactive way by allowing them to guess the temperature of different locations around the world.

# Responsiveness Across Multiple Screen Sizes
Yes, the site is designed to look good on multiple screen sizes. The use of CSS media queries and flexible layout options ensures that the site adapts to different screen sizes.

# Netlify
https://main--weatherguesserproject.netlify.app/guess

# React's state management to keep track of user interactions

State variables like city and guessTemp store the user's inputs, which are then used to fetch and display weather data.
The state variable weatherData holds the data fetched from the API, allowing the UI to update dynamically to reflect the actual weather conditions and compare them against the user's guess.

Our site fetches weather data from openWeatherMap API, which provides real-time weather information that is crucial for the app's functionality. The fetchWeatherData function is used to make API calls to retrieve the current weather conditions based on the user's input.
