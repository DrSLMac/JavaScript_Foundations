const { classrooms } = require('../datasets/classrooms');

const classPrompts = {
  // Create an array of just the front-end classrooms.
  // ex: [
  //   { roomLetter: 'A', program: 'FE', capacity: 32 },
  //   { roomLetter: 'C', program: 'FE', capacity: 27 },
  //   { roomLetter: 'E', program: 'FE', capacity: 22 },
  //   { roomLetter: 'G', program: 'FE', capacity: 29 }
  // ]
  feClassrooms() {
    const fe = classrooms.filter((program) => {
      return program.program === 'FE'
    })
    return fe
  },

  beClassrooms() {
    const be = classrooms.filter((program) => {
      return program.program === 'BE'
    })
    return be
  },

  // Create an object where the keys are 'feCapacity' and 'beCapacity', and the values are the total capacity for all classrooms in each program.
  // ex: {
  //   feCapacity: 110,
  //   beCapacity: 96
  // }
  totalCapacities() {
    const capacity = classrooms.reduce((newObj, curr) => {
      newObj.feCapacity = this.feClassrooms().reduce((total, room) => total += room.capacity, 0)
      newObj.beCapacity = this.beClassrooms().reduce((total, room) => total += room.capacity, 0)
      return newObj
    }, {})
    return capacity
  },

  // Return the array of classrooms sorted by their capacity (least capacity to greatest).
  sortByCapacity() {
    const sorted = classrooms.sort((a, b) => {
      return a.capacity - b.capacity
    })
    return sorted
  }
};

module.exports = classPrompts;
