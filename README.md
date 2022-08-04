# Top Earthquakes App
## _Top 3 Earthquakes in the last month_


The Top Earthquakes APP is a module in charge of connecting with the USGS' API and get the top 3 earthquakes of the month. It displays the earthquake's location name, the magnitude and connects with Google Maps API to display the actual location. Powered with ReactJS. Due to the fact that neither USGS nor Google API needed an special authentication method, it was developed merely with a front-end library, but it can easily be adapted to work with a Back-end technology and send the requests to such API in case of any escalation is needed.

## Features

- Connects to USGS' API and fetches the strongest 3 earthquakes in the last 30 days.
- Displays the data related to these earthquakes,
- Connects to the Google's API, so it displays the earthquake's actual position.

## Tech

This APP uses a number of open source projects to work properly:

- [Javascript](https://www.javascript.com/) - Programming language
- [ReactsJS](https://reactjs.org/) - A JavaScript library for building interfaces
- [Jest](https://jestjs.io/) - JavaScript's testing framework
- [Snyk](https://snyk.io/) - Tool to check the code's security

## Application Structure
__components__ - This folder contains the components, which are building blocks of the project.
__features__ - This folder contains the actions and reducers of Redux, so they manage the status.
__pages__ - This folder contains the pages, each page has its state & consists of various components.
__tests__ - This folder contains the app's tests
__.env__ - File with environment variables
## Installation

This API requires NPM/Yarn to run.

Install & run it locally.

```sh
git clone https://github.com/dbores3/TopEarthquakes
cd TopEarthquakes/
npm install
npm start
```

## Dependencies

This APP is currently extended with the following dependencies.
Instructions on how to use them in your own application are linked below.

| Dependency | URL |
| ------ | ------ |
| dotenv | https://www.npmjs.com/package/dotenv |
| axios | https://github.com/axios/axios |
| react-redux | https://express-validator.github.io/docs/ |
| @react-google-maps/api | https://www.npmjs.com/package/@react-google-maps/api |

127.0.0.1
`
