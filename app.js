// DEPENDENCIES

const express = require("express");
const locationsController = require("./controllers/locationsController");
const machinesController = require("./controllers/machinesController");
const personsController = require("./controllers/personsController");
const plansController = require("./controllers/plansController");
const socialEventsController = require("./controllers/socialEventsController");

// CONFIGURATION

const app = express(); 

// MIDDLEWARE

app.use(`/locations`, locationsController);
app.use(`/machines`, machinesController);
app.use(`/persons`, personsController);
app.use(`/plans`, plansController);
app.use(`/socialEvents`, socialEventsController);

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