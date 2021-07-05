const filterNetworksByCity = (networks, city) => {
  console.log(networks);
  const filteredNetworks = networks.filter(
    (network) => network.location.city.toUpperCase() === city.toUpperCase()
  );
  return filteredNetworks;
};

module.exports = { filterNetworksByCity };
