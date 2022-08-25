

const ShoppingBasket = require('./shoppingBasket.js');

describe('ShoppingBasket element', () => {
  it('gets total', () => {

    const shoppingBasket = new ShoppingBasket;
    expect(shoppingBasket.getTotalPrice()).toBe(0);

  });

  it('add a mentos then check total', () => {
    const shoppingBasket = new ShoppingBasket;
    const fakeMentos = { getPrice: () => 8.99}
    shoppingBasket.addItem(fakeMentos)
    expect(shoppingBasket.getTotalPrice()).toBe(8.99);
    });

  it('add a mentos and a skittles check total', () => {

    const shoppingBasket = new ShoppingBasket;
    const fakeMentos = { getPrice: () => 8.99 }
    const fakeSkittle = { getPrice: () => 3.99 }
    shoppingBasket.addItem(fakeMentos)
    shoppingBasket.addItem(fakeSkittle)
    expect(shoppingBasket.getTotalPrice()).toBe(12.98);
  });

  it('discount a mentos and check total', () => {
    const shoppingBasket = new ShoppingBasket;
    const fakeMentos = { getPrice: () => 8.99 }
    shoppingBasket.addItem(fakeMentos)
    shoppingBasket.applyDiscount(3.99)
    result = shoppingBasket.getTotalPrice()
    expect(Math.round(result + "e+2") / 100).toBe(5.00);
  });

});