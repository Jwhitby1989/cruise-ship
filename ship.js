// As a cruise ship captain,
// So I can get passengers started on their journey,
// I want a ship to be able to set sail from a port.
function Ship(port) {
  this.currentPort = port;

  this.setSail = () => {
    this.currentPort = "";
  };
}

module.exports = Ship;
