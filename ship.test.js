// As a cruise ship captain,
// So I can get passengers to a new destination,
// I want a ship to be able to dock at a different port.
const Ship = require("./ship");
const Port = require("./port");
describe("make a cruise ship that has passengers aboard, has a starting point and can accept methods", () => {
  let ship;
  let port1;
  let port2;
  beforeEach(() => {
    port1 = new Port("southampton");
    port2 = new Port("amsterdam");
    ship = new Ship([port1, port2]);
  });
  it("creates new object of ship", () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it("cruise ship has a starting port", () => {
    expect(ship.currentPort).toEqual(port1);
  });
  it("test state change of ship", () => {
    ship.setSail();
    expect(ship.currentPort).toEqual({});
  });
  it("tests what was currentPort is now in previousPorts", () => {
    ship.setSail();
    expect(ship.previousPorts[0]).toEqual(port1);
  });
  it("tests docking method", () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(port2);
  });
});

describe("make a new object of a port with a name", () => {
  let port;
  beforeEach(() => {
    port = new Port("dover");
  });
  it("tests the creation of a new port object", () => {
    expect(port).toBeInstanceOf(Object);
  });
});
