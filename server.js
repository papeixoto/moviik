const express = require("express");
const { getAllNetworks } = require("./connections/citybikes");
const { filterNetworksByCity } = require("./transformations/citybikes");

const app = express();
const port = process.env.PORT || 3000;

app.listen(port);
app.use(express.json());

app.get("/networks/lisbon", async (req, res) => {
  console.log("/networks/lisbon");
  try {
    const response = await getAllNetworks();
    const networks = response?.data?.networks;
    const lisbonNetworks = filterNetworksByCity(networks, "Lisbon");
    const dataToSend = {
      networks: lisbonNetworks,
    };
    res.send(dataToSend);
  } catch (error) {
    console.log(error);
    const { statusCode = 500 } = error;
    res.status(statusCode).send(error);
  }
});

console.log("API running on port " + port);
