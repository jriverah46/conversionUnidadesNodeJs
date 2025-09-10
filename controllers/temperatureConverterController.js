const temperatureConverterService = require("../services/temperatureConverterService");

const celsiusToFahrenheit = (req, res) => {
  const celcius = req.params.value;
  if (isNaN(celcius)) {
    return res.status(400).json({ error: "valor invalido" });
  }
  const temperatureFahrenheit =
    temperatureConverterService.celsiusToFahrenheit(celcius);
  res.json({
    message: `${celcius}°C
 = ${temperatureFahrenheit}°F`,
  });
};

const fahrenheitToCelsius = (req, res) => {
  const fahrenheit = req.params.value;
  if (isNaN(fahrenheit)) {
    return res.status(400).json({ error: "valor invalido" });
  }
  const temperatureCelcius =
    temperatureConverterService.fahrenheitToCelsius(fahrenheit);
  res.json({
    message: `${fahrenheit}°F = ${temperatureCelcius}°C`,
  });
};

module.exports = { celsiusToFahrenheit, fahrenheitToCelsius };
