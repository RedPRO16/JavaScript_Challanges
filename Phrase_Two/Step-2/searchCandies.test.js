
const searchCandies = require('./searchCandies');

describe('searchcandies', (search, price) => {

  it('searches "Ma" upto price 10', () =>
  expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']))

  it('searches "Ma" upto price 2', () =>
  expect(searchCandies('Ma', 2)).toEqual(['Mars']))

  it('searches "S" upto price 10', () =>
  expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]))

  it('searches "S" upto price 4', () =>
  expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles']))

})






// > searchCandies('Ma', 10);
// [ 'Mars', 'Maltesers' ]

// > searchCandies('Ma', 2); // Maltesers excluded: it's more than 2
// [ 'Mars' ]

// > searchCandies('S', 10);
// [ 'Skitties', 'Skittles', 'Starburst' ]

// > searchCandies('S', 4);
// [ 'Skitties', 'Skittles' ] // Starbust excluded: it's more than 4