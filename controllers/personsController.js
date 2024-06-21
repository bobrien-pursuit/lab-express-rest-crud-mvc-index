// DEPENDENCIES

const express = require("express");

// ROUTER

persons = express.Router();

// MODELS

const personArray = require("../models/personModel");

// ROUTES

persons.get("/", (req, res) => {
    res.json(personArray);
});

// EXPORTS

module.exports = persons;