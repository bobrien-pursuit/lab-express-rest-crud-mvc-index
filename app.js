// DEPENDENCIES

const express = require(express);
const locationsController = require("./controllers/locationsController");
const machinesController = require("./controllers/machinesController");
const personsController = require("./controllers/personsController");
const plansController = require("./controllers/plansController");
const specialEventsController = require("./controllers/specialEventsController");

// CONFIGURATION

const app = express(); 

// MIDDLEWARE

app.use(`/locations`, locationsController);
app.use(`/machinesController`, machinesController);
app.use(`/personsController`, personsController);
app.use(`/plansController`, plansController);
app.use(`/specialEventsController`, specialEventsController);

// ROUTES

app.get(`/`, (req, res) => {
    res.send(`Hello world!`);
});

// 404 PAGE

app.get(`*`, (req, res) => {
    res.json({error: `Page not found.`});
});

// EXPORT

module.exports = app;