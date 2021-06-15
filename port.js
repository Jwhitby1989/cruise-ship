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

module.exports = Port;
// created a 'port' object
