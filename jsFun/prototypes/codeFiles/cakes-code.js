const { cakes } = require('../datasets/cakes');

const cakePrompts = {
  // Return an array of objects that include just the flavor of the cake and how much of that cake is in stock.
  // ex: [
  //    { flavor: 'dark chocolate', inStock: 15 },
  //    { flavor: 'yellow', inStock: 14 },
  //    ..etc
  // ]
  stockPerCake() {
    const getStock = cakes.map((supply) => {
      return {flavor: supply.cakeFlavor,
            inStock: supply.inStock}
    })
    return getStock
  },

  // Return an array of only the cakes that are in stock.
  // ex: [
  //   {
  //   cakeFlavor: 'dark chocolate',
  //   filling: null,
  //   frosting: 'dark chocolate ganache',
  //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
  //   inStock: 15
  // },
  // {
  //   cakeFlavor: 'yellow',
  //   filling: 'citrus glaze',
  //   frosting: 'chantilly cream',
  //   toppings: ['berries', 'edible flowers'],
  //   inStock: 14
  // },
  // ..etc
  // ]
  onlyInStock() {
    return cakes.filter(cake => cake.inStock > 0)
  },

  // Return the total amount of cakes in stock.
  // Answer: 59
  totalInventory() {
    return howMany = cakes.reduce((total, current) => {
      total += current.inStock
      return total
    }, 0)
  },

  // Return an array of all unique toppings (no duplicates) needed to bake every cake in the dataset.
  // ex: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
  allToppings() {
    let combinedToppings = [];
    cakes.forEach((cake) => {
      combinedToppings.push(cake.toppings)
    })
    const flattenedArr = combinedToppings.flatMap(toppings => toppings)
    const uniqueToppings = flattenedArr.filter((a,b) => {
      return flattenedArr.indexOf(a) === b
    })
    return uniqueToppings
  },

  // I need to make a grocery list. Please give me an object where the keys are each topping, and the values are the amount of that topping I need to buy.
  // ex: {
  //    'dutch process cocoa': 1,
  //    'toasted sugar': 3,
  //    'smoked sea salt': 3,
  //    'berries': 2,
  //    ...etc
  // }
  groceryList() {

  }
};

module.exports = cakePrompts;