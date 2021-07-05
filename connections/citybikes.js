const axios = require("axios");

const getAllNetworks = async () =>
  await axios.get("http://api.citybik.es/v2/networks");

module.exports = { getAllNetworks };
