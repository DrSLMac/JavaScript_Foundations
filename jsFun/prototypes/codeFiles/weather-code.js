const { weather } = require('../datasets/weather');

const weatherPrompts = {
  // Return an array of all the average temperatures.
  // ex: [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]
  getAverageTemps() {
    const getTemps = weather.reduce((averages, city) => {
      averages.push((city.temperature.high + city.temperature.low)/2)
      return averages
    },[])
    return getTemps
  },

  // Return an array of sentences of the locations that are sunny and mostly sunny. Include the location and weather type.
  // ex: [ 'Atlanta, Georgia is sunny.',
  // 'New Orleans, Louisiana is sunny.',
  // 'Raleigh, North Carolina is mostly sunny.' ]
  findSunnySpots() {
    const getSun = weather.filter((city) => {
     return city.type === 'sunny' || city.type === "mostly sunny"
    }).map((city) => {
      return `${city.location} is ${city.type}.`
    })
    return getSun
  },

  // Return the location with the highest humidity.
  // ex: {
  //   location: 'Portland, Oregon',
  //   type: 'cloudy',
  //   humidity: 84,
  //   temperature: { high: 49, low: 38 }
  // }
  findHighestHumidity() {
    const humid = weather.reduce((highest, current) => {
      if (current.humidity > highest.humidity) {
        highest = current
      }
      return highest
    })
    return humid
  }
};

module.exports = weatherPrompts;