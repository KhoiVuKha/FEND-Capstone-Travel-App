# FEND-Capstone-Travel-App
Project Capstone FEND

The goal of this project is to practice:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Using APIs and creating requests to external urls.
- Service workers

## API used in this project
**GeoNames**
https://www.geonames.org/export/web-services.html

**Weatherbit API**
https://www.weatherbit.io/api

**Pixabay Images**
API Documentation: https://pixabay.com/api/docs/

## Prerequisite
This project should run on a local server. 

Node and Express should be installed on the local machine. 
To ensure that Node and npm are installed, from the terminal:

```bash
node -v
npm -v
```

Required packages listed in `packages.json`.

## Installation
**1. Ensure Node, Express, Cors, Body parser, Webpack and all required packages are installed.**

**2. Clone project repo and change directory to current project**
```bash
git clone <project repo url>
cd <project directory>
```

**3. Run npm install**
```bash
npm install
```

**4. Get MeaningCloud API key and insert to .env file**

Follow instruction in **Prerequisite** section. 

**5. Build and run project**
Afterwards, to start the server run these commands in command line:
```bash
npm run build-dev
npm run build-prod
npm run start
```

Navigate to http://localhost:8080/ in your browser.

**6. Run unit testing**
```bash
npm run test
```

## Usage
To use the app, You need:
- Enter the destination you want to visit.
- Select the departure date (Start date).
- Select the return date (End date).
And press the **search** button, app will query some API and return a result about 
the place you are looking for. 

- User can able to save the trip to Local Storage so that when they close, then revisit the page, their information is still remain.
- User can select the "Saved Trips" tab to display all destination of the trip.
- User can able add new trip or delete all trip in "Saved Trips" tab.

## Demo

<img width="1439" alt="image" src="https://user-images.githubusercontent.com/15206083/209924835-08ee7696-bc5c-451b-a011-335d75e77be2.png">


