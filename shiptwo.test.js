const Ship = require("./shiptwo");
const Port = require("./porttwo");
const { expect } = require("@jest/globals");

describe("creating a new Ship object", () => {
  let ship;
  let port1;
  let port2;
  let port3;
  beforeEach(() => {
    ship = new Ship("titanic", [port1, port2, port3]);
    port1 = new Port("dover");
    port2 = new Port("southampton");
    port3 = new Port("amsterdam");
  });
  it("tests to see the new ship object", () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it("tests the name of the ship", () => {
    expect(ship.name).toEqual("titanic");
  });
  it("tests the ship has a starting port", () => {
    expect(ship.currentPort.name).toEqual("dover");
  });
  it("adds method to set sail, changing state of ship", () => {
    ship.setSail();
    expect(ship.currentPort).toEqual({});
  });
  it("adds a docking method, which allows the ship to dock at a new port", () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toEqual(port2);
  });
});

describe("creating a new Port object", () => {
  let port;
  beforeEach(() => {
    port = new Port("boston");
  });
  it("tests the creation of a new Port object", () => {
    expect(port).toBeInstanceOf(Object);
  });
  it("tests the port has a name property", () => {
    expect(port.name).toEqual("boston");
  });
});
