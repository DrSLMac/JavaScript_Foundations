const { nationalParks } = require('../datasets/nationalParks');

const nationalParksPrompts = {
  /// Return an object containing the names of which parks I need to visit and the ones I have already visited.
  // ex: {
  //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
  //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
  // }
  getParkVisitList() {
    parksToVisit = [];
    parksVisited = [];
    const allParks = nationalParks.reduce((newObj, current) => {
      current.visited ? parksVisited.push(current.name) : parksToVisit.push(current.name)
      newObj.parksToVisit = parksToVisit;
      newObj.parksVisited = parksVisited
      return newObj
    }, {})
    return allParks
  },

  // Return an array of objects where the key is the state and the value is its National Park
  // ex: [ { Colorado: 'Rocky Mountain' },
  // { Wyoming: 'Yellowstone' },
  // { Montana: 'Glacier' },
  // { Maine: 'Acadia' },
  // { Utah: 'Zion' },
  // { Florida: 'Everglades' } ]
  // getParkInEachState() {
  //   const parks = nationalParks.reduce((finalArr, location) => {
  //     finalArr.push({[location.location]: location.name})
  //     return finalArr
  //   }, [])
  //   return parks
  // },

  getParkInEachState() {
    const parks = nationalParks.map((site) => {
      return {[site.location]: site.name}
    })
    return parks
  },

  // Return an array of all the activities I can do in a National Park. Make sure to exclude duplicates.
  // ex: [ 'hiking', 'shoeshoing', 'camping', 'fishing', 'boating', 'watching wildlife', 'cross-country skiing', 'swimming', 'bird watching', 'canyoneering', 'backpacking', 'rock climbing' ]
  getParkActivities() {
    const activities = nationalParks.reduce((finalArr, current) => {
      current.activities.forEach((activity) => {
        if (!finalArr.includes(activity)) {
          finalArr.push(activity)
        }
      })
      return finalArr
    }, [])
    return activities
  }
};

module.exports = nationalParksPrompts;