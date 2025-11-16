const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require("express-validator");

router.post("/register", [
    body("fullname.firstname").isLength({ min: 3 }).withMessage("Firstname is required"),
    body("fullname.lastname").isLength({ min: 3 }).withMessage("Lastname is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 chars"),
    body("vehicle.color").isLength({ min: 3 }).withMessage("Vehicle color is required"),
    body("vehicle.plate").isLength({ min: 3 }).withMessage("Vehicle plate number is required"),
    body("vehicle.capacity").isInt({ min: 1 }).withMessage("Vehicle capacity must be at least 1"),
    body("vehicle.vehicleType").isIn(['bike', 'car', 'auto']).withMessage("Invalid vehicle type"),
],
    captainController.registerCaptain
);

module.exports = router;