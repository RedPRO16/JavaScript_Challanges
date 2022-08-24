
const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

const filter_prefix = (candy, search) =>{
  return candy.name.toLowerCase().startsWith(search.toLowerCase());
}

const searchCandies = (search, price) => {
  let name_search = candies.filter((candy) => filter_prefix(candy, search))
  let price_filter = name_search.filter((candy) => candy.price < price)
  return price_filter.map((candy) => candy.name);
};

module.exports = searchCandies

