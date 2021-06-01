// As a cruise ship captain,
// So I can get passengers aboard a ship,
// I want a ship to have a starting port.
const Ship = require("./ship");
describe("make a cruise ship that has passengers aboard, has a starting point and can accept methods", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship("liverpool");
  });
  it("creates new object of ship", () => {
    expect(ship).toBeInstanceOf(Object);
  });
});
