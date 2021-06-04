const Ship = require("./shiptwo");
const Port = require("./porttwo");
const { it, expect } = require("@jest/globals");

describe("creating a new Ship object", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship("titanic");
  });
  it("tests to see the new ship object", () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it("tests the name of the ship", () => {
    expect(ship.name).toEqual("titanic");
  });
  it("adds method to set sail to new port", () => {
    ship.setSail();
    expect(ship.currentPort).toEqual({});
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
});
