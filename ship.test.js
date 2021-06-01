// As a cruise ship captain,
// So I can get passengers started on their journey,
// I want a ship to be able to set sail from a port.
const { it, expect } = require("@jest/globals");
const Ship = require("./ship");
describe("make a cruise ship that has passengers aboard, has a starting point and can accept methods", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship("liverpool");
  });
  it("creates new object of ship", () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it("cruise ship has a starting port", () => {
    expect(ship.currentPort).toBe("liverpool");
  });
  it("test state change of ship", () => {
    ship.setSail();
    expect(ship.currentPort).toEqual("");
  });
});
