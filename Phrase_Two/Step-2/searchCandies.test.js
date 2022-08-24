
const { it } = require('node:test');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const searchCandies = require('./searchCandies');

describe('searchcandies', (search, price) => {

  it(' searches "Ma" upto price 10', () =>
  expect(searchCandies('Ma', 10)).toEqual (['Mars', Maltesers]) 
})






// > searchCandies('Ma', 10);
// [ 'Mars', 'Maltesers' ]

// > searchCandies('Ma', 2); // Maltesers excluded: it's more than 2
// [ 'Mars' ]

// > searchCandies('S', 10);
// [ 'Skitties', 'Skittles', 'Starburst' ]

// > searchCandies('S', 4);
// [ 'Skitties', 'Skittles' ] // Starbust excluded: it's more than 4