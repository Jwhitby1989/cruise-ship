(function exportPort() {
  function Port(name) {
    this.name = name;
    this.ships = [];
    this.addShip = (ship) => {
      this.ships.push(ship);
    };
    this.removeShip = (ship) => {
      const shipsRmv = this.ships.indexOf(ship);
      this.ships.splice(shipsRmv, 1);
    };
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
})();

// created a 'port' object
