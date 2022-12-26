const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

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

app.get('/', function(req, res) {
    res.sendFile('dist/index.html');
})

const port = 8080;
// Setup Server
// designates what port the app will listen to for incoming requests
app.listen(port, function() {
    console.log(`[Server] listening on port: ${port}`);
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse);
});

// POST route
app.post('/add', addData);
async function addData(req, res) {
};
