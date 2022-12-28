const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');
const axios = require('axios');

const geoNamesUserName = process.env.GEONAMES_USERNAME;
const weatherBitApiKey = process.env.WEATHERBIT_API_KEY;
const pixaBayApiKey = process.env.PIXABAY_API_KEY;

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// An array contains save trips.
let savedTrips = [];

var path = require('path');
// Require Express to run server and routes
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

console.log(__dirname);

// GET Routes
app.get('/test', function(req, res) {
    res.send(mockAPIResponse);
});

app.get('/', function(req, res) {
    // Home page
    res.sendFile('dist/index.html');
})

// POST routes
app.post('/geo-name-locations', geoNamesLocation);
async function geoNamesLocation(req, res) {
    try {
        console.log("[Server] POST route geoNamesLocation");
        let url = `${req.body.baseURL}&username=${geoNamesUserName}`;
        console.log("url: ", url);
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        console.error("error", error);
    }
};

app.post('/weather-bit-data', weatherBitInfo);
async function weatherBitInfo(req, res) {
    try {
        console.log("[Server] POST route weatherBitInfo");
        let url = `${req.body.baseURL}&key=${weatherBitApiKey}`;
        console.log("url: ", url);
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        console.error("error", error);
    }
}

app.post('/pixa-bay-images', pixaBayImages);
async function pixaBayImages(req, res) {
    try {
        console.log("[Server] POST route pixaBayImages");
        let url = `${req.body.baseURL}&key=${pixaBayApiKey}`;
        console.log("url: ", url);
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        console.error("error", error);
    }
}

// Setup Server
// designates what port the app will listen to for incoming requests
const port = 8080;
app.listen(port, function() {
    console.log(`[Server] listening on port: ${port}`);

    if (geoNamesUserName) {
        console.log("GEONAMES_USERNAME: ", geoNamesUserName);
    } else {
        console.error("Error config for GEONAMES_USERNAME");
    }

    if (weatherBitApiKey) {
        console.log("WEATHERBIT_API_KEY: ", weatherBitApiKey);
    } else {
        console.error("Error config for WEATHERBIT_API_KEY");
    }

    if (pixaBayApiKey) {
        console.log("PIXABAY_API_KEY: ", pixaBayApiKey);
    } else {
        console.error("Error config for PIXABAY_API_KEY");
    }
})
