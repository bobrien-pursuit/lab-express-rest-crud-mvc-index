// DEPENDENCIES

const express = require("express");

// ROUTER

const socialEvents = express.Router();

// MODELS

const socialEventArray = require("../models/socialEventModel");

// ROUTES

socialEvents.get("/", (req, res) => {
    res.json(socialEventArray);
});

// EXPORTS

module.exports = socialEvents;