const multiply = require('./multiply')

describe('multiply', (a, b) => {
  it('multiplies 2 and 2', () => {
    expect(multiply(2, 2)).toBe(4);
  })
  it('multiplies 4 and 6', () => {
    expect(multiply(4, 6)).toBe(24);
  })
})