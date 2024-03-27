function createDragon(name, rider, temperment) {
  return {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true
  }
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`
}

function eat(dragon) {
   dragon.timesEaten += 1
   if (dragon.timesEaten >= 3) {
    dragon.hungry = false;
   }
   return dragon
}

function findFireBreathers(dragons) {
var fireBreathers = [];
  for (var i = 0; i < dragons.length; i++) {
    if (dragons[i].temperment === "aggressive") {
      fireBreathers.push(dragons[i])
    }
  }
  return fireBreathers
}

module.exports = {
    createDragon, 
    greetRider, 
    eat, 
    findFireBreathers
  }