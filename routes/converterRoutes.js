const express = require("express");
const router = express.Router();
const temperatureController = require("../controllers/temperatureConverterController");
const distanceConverterController = require("../controllers/distanceConverterController");

router.get(
  "/celsius-to-fahrenheit/:value",
  temperatureController.celsiusToFahrenheit
);
router.get(
  "/fahrenheit-to-celsius/:value",
  temperatureController.fahrenheitToCelsius
);
router.get("/km-to-miles/:value", distanceConverterController.kmToMiles);
router.get("/miles-to-km/:value", distanceConverterController.milesToKm);

module.exports = router;
