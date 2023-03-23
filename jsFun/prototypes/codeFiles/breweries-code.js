const { breweries } = require('../datasets/breweries');

const breweryPrompts = {
  // Return the total beer count of all beers for every brewery.
  // Answer: 40
  getBeerCount() {
    const beerCount = breweries.reduce((total, current) => {
      return total += current.beers.length
    }, 0)
    return beerCount
  },

  // Return an array of objects where each object has the name of a brewery and the count of the beers that brewery has.
  // ex: [
  //  { name: 'Little Machine Brew', beerCount: 12 },
  //  { name: 'Ratio Beerworks', beerCount: 5},
  // ...etc.
  // ]
  getBreweryBeerCount() {
    const breweryAndBeer = breweries.map((brewery) => {
      return brewery = {
        beerCount: brewery.beers.length,
        name: brewery.name
      }
    })
    return breweryAndBeer
  },

  // Return a number that is the count of beers that the specified brewery has.
  // ex: given 'Ratio Beerworks', returns 5
  getSingleBreweryBeerCount(brewery) {
    const filterCount = breweries.find(pub => pub.name === brewery)
    return filterCount.beers.length
  },

  // Return the beer which has the highest ABV of all beers.
  // ex: { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
  findHighestAbvBeer() {
    const brewArrs = breweries.map((brewery) => brewery.beers)
                            .flatMap(pub => pub)
                            .reduce((highestABV, current) => {
                              if (current.abv > highestABV.abv) {
                                  highestABV = current
                                }
                                return highestABV
                              })
    return brewArrs
  }
};

module.exports = breweryPrompts;
