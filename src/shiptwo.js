// Ship Object - Task 1 - As a cruise ship captain,
// So I can get passengers aboard a ship,
// I want a ship to have a starting port.
function Ship(name, ports) {
  this.name = name;
  this.currentPort = ports[0];
  this.previousPorts = [];

  this.setSail = () => {
    this.previousPorts.push(this.currentPort);
    this.currentPort = {};
  };
  this.dock = () => {
    const previousPortIndex = ports.indexOf(
      this.previousPorts[this.previousPorts.length - 1]
    );
    this.currentPort = ports[previousPortIndex + 1];
  };
}

module.exports = Ship;
