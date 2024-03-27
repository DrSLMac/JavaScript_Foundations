function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
}

function addMenuItem(restaurant, menuItem) {
  if (!restaurant.menus[menuItem.type].includes(menuItem)) {
    return restaurant.menus[menuItem.type].push(menuItem);
  }
}

function removeMenuItem(restaurant, menuItem, menu) {
  for (var i = 0; i < restaurant.menus[menu].length; i++) {
    if (restaurant.menus[menu][i].name === menuItem) {
      restaurant.menus[menu].splice(i, 1);
      return `No one is eating our ${menuItem} - it has been removed from the ${menu} menu!`;
    }
  }
  return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;
}

function checkForFood(restaurant, foodItem) {
  if (
    restaurant.menus[foodItem.type].some((food) => food.name === foodItem.name)
  ) {
    return `Yes, we're serving ${foodItem.name} today!`;
  }
  return `Sorry, we aren't serving ${foodItem.name} today.`;
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
  checkForFood,
};
