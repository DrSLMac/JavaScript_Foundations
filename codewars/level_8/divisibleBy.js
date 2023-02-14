const divisibleBy = (numbers, divisor) => {
    return numbers.filter((num) => num % divisor === 0)
}

console.log("divisibleBy([1,2,3,4,5,6], 2): ", divisibleBy([1,2,3,4,5,6], 2)) //[2,4,6]
console.log("divisibleBy([1,2,3,4,5,6], 3): ", divisibleBy([1,2,3,4,5,6], 3)) //[3,6]
console.log("divisibleBy([0,1,2,3,4,5,6], 4): ", divisibleBy([0,1,2,3,4,5,6], 4)) //[0,4]
console.log("divisibleBy([0], 4): ", divisibleBy([0], 4)) //[0]
console.log("divisibleBy([1,3,5], 2): ", divisibleBy([1,3,5], 2)) //[]

// const Test = require('@codewars/test-compat');
// describe("Sample tests", function() {
//   it("should pass sample tests", function() {
//     Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
//     Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
//     Test.assertDeepEquals(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
//     Test.assertDeepEquals(divisibleBy([0], 4), [0]);
//     Test.assertDeepEquals(divisibleBy([1,3,5], 2), []);
//   })  
// })  