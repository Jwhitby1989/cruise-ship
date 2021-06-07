// As a cruise ship captain,
// So I can get passengers to a new destination,
// I want a ship to be able to dock at a different port.
function Ship(ports) {
  this.currentPort = ports[0];
  this.previousPorts = [];
  //   pass in array;
  this.setSail = () => {
    this.previousPorts.push(this.currentPort);
    this.currentPort = {};
  };
  this.dock = () => {
    // find current port index in array
    const previousPortIndex = ports.indexOf(
      this.previousPorts[this.previousPorts.length - 1]
    );
    // set current port to the next port in the array
    this.currentPort = ports[previousPortIndex + 1];
  };
}

module.exports = Ship;
