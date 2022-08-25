
const { it } = require("node:test");
const Candy = require("./candy");

describe('Candy element', () => {
  it('gets candy name', ()=> {
    const candy = new Candy('Aero', 1.99);
    expect(candy.getName()).toBe('Aero')
  })

  it('gets candy price', () => {
    const candy = new Candy('Aero', 1.99);
    expect(candy.getPrice()).toBe(1.99)
  })
})