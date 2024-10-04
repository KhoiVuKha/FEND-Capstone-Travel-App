const getWeatherForecast = async (daysToGo, lat, lon) => {
    let weatherForecastFormat = 'hourly';
    if (daysToGo > 7) weatherForecastFormat = 'daily';

    const weatherPostRequestBody = {
        baseURL: `https://api.weatherbit.io/v2.0/forecast/${weatherForecastFormat}?lat=${lat}&lon=${lon}`,
    };

    const weatherResponse = await fetch('http://localhost:8080/weather-bit-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(weatherPostRequestBody),
    });

    const weatherData = await weatherResponse.json();
    return weatherData;
};

export { getWeatherForecast };
