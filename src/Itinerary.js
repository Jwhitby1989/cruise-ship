// As a tour representative,
// So I can decide which destinations passengers visit,
// I want a ship to take an itinerary which determines at which port it next docks.
(function exportItinerary() {
  function Itinerary(ports) {
    this.ports = ports;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Itinerary;
  } else {
    window.Itinerary = Itinerary;
  }
})();
