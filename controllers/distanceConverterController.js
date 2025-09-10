const distanceConverterService = require("../services/distanceConverterService");

const kmToMiles = (req, res) => {
  const km = req.params.value;
  if (isNaN(km)) {
    return res.status(400).json({ message: "valor invalido" });
  }
  const distanceMiles = distanceConverterService.kmToMiles(km);
  res.json({ message: `${km} KM = ${distanceMiles} Miles` });
};

const milesToKm = (req, res) => {
  const miles = req.params.value;
  if (isNaN(miles)) {
    return res.status(400).json({ message: "valor invalido" });
  }

  const distanceKm = distanceConverterService.milesToKm(miles);
  res.json({ message: `${miles} Miles = ${distanceKm} KM` });
};

module.exports = {
  kmToMiles,
  milesToKm,
};
