function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  const character = {
    name: name, 
    age: age,
    pronouns: pronouns
  }
  return character
}

function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
    reviews.push(review)
  }
  return reviews
}

function calculatePageCount(title) {
  console.log({title})
  const letters = title.split('')
  return letters.length * 20
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}