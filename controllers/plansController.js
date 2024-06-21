// DEPENDENCIES

const express = require("express");

// ROUTER

const plans = express.Router();

// MODELS

const planArray = require("../models/planModel");

// ROUTES

//localhost:1981/plans/
plans.get("/", (req, res) => {
    res.json(planArray);
});

// EXPORTS

module.exports = plans;