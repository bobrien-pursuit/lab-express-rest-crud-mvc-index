// DEPENDENCIES

const express = require("express");

// ROUTER

const machines = express.Router();

// MODELS

const machineArray = require("../models/machineModel")

// ROUTES

//localhost:1981/machines/
machines.get("/", (req, res) => {
    res.json(machineArray);
})

// EXPORTS
 module.exports = machines;
