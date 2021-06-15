// Create a new test spec to check the new Itinerary object can be instantiated.
// Write the code that makes this test pass.
// Create a new test spec to check the new Itinerary object has a ports property.
// Write the code that makes this test pass.
const Ship = require("./ship");
const Port = require("./port");
const Itinerary = require("./Itinerary");
describe("make a cruise ship that has passengers aboard, has a starting point and can accept methods", () => {
  let ship;
  let port1;
  let port2;
  let itinerary;
  beforeEach(() => {
    port = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
    };
    port1 = {
      ...port,
      name: "Dover",
      ships: [],
    };
    port2 = {
      ...port,
      name: "Amsterdam",
      ships: [],
    };

    itinerary = {
      ports: [port1, port2],
    };

    ship = new Ship(itinerary);
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
    expect(ship.previousPort).toEqual(port1);
  });
  it("tests docking method", () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(port2);
  });
  it("Test the set sail method so that it throws an error when you try and sail past the last port in the itinerary.", () => {
    ship.setSail();
    ship.dock();
    expect(() => ship.setSail()).toThrow("You've gone too far!");
  });
  it("tests the adding of ship method", () => {
    expect(ship.currentPort.addShip).toHaveBeenCalled();
  });
  it("tests it removes ship on setSail", () => {
    ship.setSail();
    expect(ship.previousPort.removeShip).toHaveBeenCalled();
  });
});

describe("Port test suite", () => {
  let port;
  let ship;
  beforeEach(() => {
    port = new Port("dover");
    ship = jest.fn();
  });
  it("tests the creation of a new port object", () => {
    expect(port).toBeInstanceOf(Object);
  });
  it("Tests ports adds ships method", () => {
    port.addShip(ship);
    expect(port.ships.length).toBe(1);
  });
  it("tests ports removed from ship method", () => {
    port.addShip(ship);
    port.removeShip(ship);
    expect(port.ships.length).toBe(0);
  });
});
// Ship
//   can set sail
//   gets added to port on instantiation
//   can dock at a different port
describe("creating new Itinerary object", () => {
  let itinerary;
  let port1;
  let port2;
  beforeEach(() => {
    port1 = jest.fn();
    port2 = jest.fn();
    itinerary = new Itinerary([port1, port2]);
  });
  it("tests the creation of the new itinerary object", () => {
    expect(itinerary).toBeInstanceOf(Object);
  });
  it("tests the creation of new ports", () => {
    expect(itinerary.ports.length).toBe(2);
  });
});
