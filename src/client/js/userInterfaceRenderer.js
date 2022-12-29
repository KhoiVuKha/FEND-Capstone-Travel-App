const $ = require('jquery');

const countDown = (startDate, endDate) => {
    const start = Date.parse(startDate);
    const end = Date.parse(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (24 * 3600 * 1000));
    return diffDays;
}

const displayPlanTrip = (trip) => {
    $('.mask').addClass('active');
    document.querySelector('.popover-modal').style.display = 'block';
    document.querySelector('.modal-header__text').innerText = `${trip.destination}, ${trip.country}`;
    let pixabayData = trip.image;
    console.log("pixabayData hit[0]: ", pixabayData.hits[0]);
    document.querySelector('.destination__img').setAttribute('src', pixabayData.hits[0].webformatURL);
    const tripStart = getTripDate(trip.startDate);
    const tripEnd = getTripDate(trip.endDate);
    const duration = countDown(trip.startDate, trip.endDate);

    document.querySelector('.modal_destination').innerHTML = `${trip.destination}, ${trip.country}`;
    document.querySelector('.start_date').innerHTML = `${tripStart}`;
    document.querySelector('.end_date').innerHTML = `${tripEnd}`;
    document.querySelector('.duration').innerHTML = `${duration} days`;

    // Display the days left to trip
    const daysLeft = countDown(new Date(), tripStart);
    document.querySelector('.trip_countdown').innerHTML = `Your trip to ${trip.destination} is ${daysLeft} days away.`;
    
    // Display weather info
    showWeatherForecast(trip);
}

const showWeatherForecast = (trip) => {
    const weather = getWeatherInfo(trip.weatherForecast);
    document.querySelector('.trip_weather').innerHTML = 
        `<p class=""><b>The current weather: </b> <br/>
            <span class="">Temperature: ${weather.temperature}&deg;C</span> <br/>
            <span class="">${weather.summary}</span> 
        </p>`;
}

const getTripDate = (date) => {
    const months = ["January", "February", "March", 
                    "April", "May", "June", 
                    "July", "August", "September", 
                    "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const tripDate = new Date(date);
    const tripDateText = `${days[tripDate.getDay()]}, ${months[tripDate.getMonth()]} ${tripDate.getDate()}, ${tripDate.getFullYear()}`;

    return tripDateText;
}

const getWeatherInfo = (weatherForecast) => {
    const weather = {
        temperature: 0,
        summary: ''
    };

    weather.temperature = weatherForecast.data[0].temp;
    weather.summary = weatherForecast.data[0].weather.description;
    return weather;
}

const displaySavedTrip = (trip) => {
    const tripStart = getTripDate(trip.startDate);
    const tripEnd = getTripDate(trip.endDate);
    const duration = countDown(trip.startDate, trip.endDate);
    const daysLeft = countDown(new Date(), tripStart);
    const section = document.createElement('section');

    let pixabayData = trip.image;
    const div = document.createElement('div');
    div.classList.add('trip');
    div.innerHTML = `<div class="modal-body left-side">
                        <img class="destination__img" src="${pixabayData.hits[0].webformatURL}" alt="Popular Image for Destination">
                    </div>
                    <div class="modal-body right-side">
                        <p><b>Trip to:</b> <span class="destination">${trip.destination}</span></p>
                        <p><b>Departure: </b> <span class="start_date">${tripStart}</span></p>
                        <p><b>Return:</b> <span class="end_date">${tripEnd}</span></p>
                        <p><b>Duration:</b> <span class="duration">${duration}</span></p>
                        <span class="trip_countdown">Your trip to ${trip.destination} is ${daysLeft} days away.</span>
                    </div>`;
    section.appendChild(div);
    document.querySelector('.saved-trips').appendChild(section);
}

export { displayPlanTrip, displaySavedTrip, countDown};
