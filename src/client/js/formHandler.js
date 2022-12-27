const $ = require('jquery');

/* Global variables */
const trip = {};
let trips = localStorage.getItem('trips') ? JSON.parse(localStorage.getItem('trips')) : [];
const searchBtn = document.getElementById('btn_search');
const saveTripBtn = document.getElementById('btn-save-trip');
const cancelBtn = document.getElementById('btn-cancel-trip');
const createNewTripBtn = document.getElementById('btn-add-new-trip');
const deleteAllTripsBtn = document.getElementById('btn-delete-all');

const handleSaveTripEvent = async(e) => {
    e.preventDefault();
    trips.push(trip);
    localStorage.setItem('trips', JSON.stringify(trips));
    window.location.href = 'saved-trips.html';
}

const handleCancelTripEvent = () => {
    $('.mask').removeClass('active');
}

/* Function to handle submit events */
const handleSearchEvent = async (event) => {
    console.log("::: Handle Search Event :::")
    event.preventDefault();
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
