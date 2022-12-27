const $ = require('jquery');

import { getDestination, getStartingDate, getReturnDate } from './formInfoGetter.js';
import { getGeonameData } from './getGeoNameData.js';

/* Global variables */
const trip = {};
let trips = localStorage.getItem('trips') ? JSON.parse(localStorage.getItem('trips')) : [];
const searchBtn = document.getElementById('btn_search');
const saveTripBtn = document.getElementById('btn-save-trip');
const cancelBtn = document.getElementById('btn-cancel-trip');
const createNewTripBtn = document.getElementById('btn-add-new-trip');
const deleteAllTripsBtn = document.getElementById('btn-delete-all');

const handleSaveTripEvent = async(e) => {
    console.log("::: Handle Save Trip Event :::");
    e.preventDefault();
    trips.push(trip);
    localStorage.setItem('trips', JSON.stringify(trips));
    window.location.href = 'saved-trips.html';
}

const handleCancelTripEvent = () => {
    console.log("::: Handle Cancel Trip Event :::");
    $('.mask').removeClass('active');
}

/* Function to handle submit events */
const handleSearchEvent = async (event) => {
    console.log("::: Handle Search Event :::");
    event.preventDefault();

    // Get user input from UI
    trip.destination = getDestination();
    trip.startData = getStartingDate();
    trip.endDate = getReturnDate();
    let startDateInMs = new Date(trip.startData);
    startDateInMs = startDateInMs.getTime();
    let endDateInMs = new Date(trip.endDate);
    endDateInMs = endDateInMs.getTime();

    console.log("[Client] User input destination: ", trip.destination);
    console.log("[Client] User input startData: ", trip.startData);
    console.log("[Client] User input endDate: ", trip.endDate);
    console.log("startDateInMs: ", startDateInMs);
    console.log("endDateInMs: ", endDateInMs);

    if (trip.destination !== '' && trip.startDate !== '' && trip.endDate !== '' && (startDateInMs < endDateInMs)) {
        // Get Geo Name Data
        const geoLocation = await getGeonameData(trip.destination);
        trip.latitude = geoLocation.geonames[0].lat;
        trip.longitude = geoLocation.geonames[0].lng;
        trip.country = geoLocation.geonames[0].countryName;
        trip.countryCode = geoLocation.geonames[0].countryCode;
        console.log("lat: ", trip.latitude);
        console.log("lon: ", trip.longitude);
        console.log("country: ", trip.country);
        console.log("countryCode: ", trip.countryCode);

        // Get Weather forcast
        //trip.weatherForecast = await getWeatherForecast(trip.latitude, trip.longitude);

        // Get Image of destination
        //trip.image = await getImageUrl(trip.destination, trip.country);

        //TODO: updateModal(trip);
    } else if (trip.startDate > trip.endDate) {
        alert('Return date should be after the start date');
    } else {
        alert('Please enter the destination, start date and return date');
    }
}

// Add events listener
if (searchBtn) {
    searchBtn.addEventListener('click', handleSearchEvent);
}

if (saveTripBtn) {
    saveTripBtn.addEventListener('click', handleSaveTripEvent);
}

if (cancelBtn) {
    cancelBtn.addEventListener('click', handleCancelTripEvent);
}

if (createNewTripBtn) {
    createNewTripBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

if (deleteAllTripsBtn) {
    deleteAllTripsBtn.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    });
}

$('.close, .mask').on('click', () => {
    handleCancelTripEvent();
});

if (window.location.href.includes('trips')) {
    let trips = JSON.parse(window.localStorage.getItem('trips'));
    if (trips) {
        trips.forEach(trip => {
            //displaySavedTrip(trip);
        });
    }
}

/* TODO: Function to POST data */
const postData = async (url = "", data = {}) => {
    console.log("[Client] postData");
};

/* TODO: Function to update UI */
const updateUI = (data) => {
    console.log("[Client] updateUI");
};

export {
    handleSearchEvent
}
