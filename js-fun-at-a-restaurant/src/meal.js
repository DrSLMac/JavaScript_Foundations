function nameMenuItem(food) {
  return `Delicious ${food}`
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type,
  }
}
function addIngredients(item, ingredients) {
  if (!ingredients.includes(item)) {
  return ingredients.push(item);
  }
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  return price - price * 0.1
}

function createRecipe(title, ingredients, menuItemType) {
return {
  title: title,
  ingredients: ingredients,
  type: menuItemType,
}
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}