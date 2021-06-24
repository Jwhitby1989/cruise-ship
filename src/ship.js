// As a cruise ship captain,
// So I can get passengers to a new destination,
// I want a ship to be able to dock at a different port.

(function exportShip() {
  function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.currentPort.addShip(this);
    this.previousPort = null;
    //   pass in array;
    this.setSail = () => {
      if (this.currentPort === itinerary.ports[itinerary.ports.length - 1]) {
        throw new Error("You've gone too far!");
      }
      this.currentPort.removeShip(this);
      this.previousPort = this.currentPort;
      this.currentPort = {};
    };
    this.dock = () => {
      // find current port index in array
      const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
      // set current port to the next port in the array
      this.currentPort = itinerary.ports[previousPortIndex + 1];
      this.currentPort.addShip(this);
    };
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Ship;
  } else {
    window.Ship = Ship;
  }
})();
