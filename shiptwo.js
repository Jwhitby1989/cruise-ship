// Ship Object - Task 1 - As a cruise ship captain,
// So I can get passengers aboard a ship,
// I want a ship to have a starting port.
function Shiptwo(name) {
  this.name = name;
  this.previousPorts = [];
  this.currentPort = [0];

  this.setSail = () => {
    this.previousPorts.push(this.currentPort);
    this.currentPort = {};
  };
}

module.exports = Shiptwo;
