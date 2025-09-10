const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const fahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
};
