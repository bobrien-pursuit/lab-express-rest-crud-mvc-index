// DEPENDENCIS

const express = require("express");

// ROUTER

const locations = express.Router();

// MODEL

const locationArray = require("../models/locationModel");

// ROUTES

//localhost:1981/location
locations.get("/", (req, res) => {
    res.json(locationArray);
})

// EXPORTS

module.exports = locations;