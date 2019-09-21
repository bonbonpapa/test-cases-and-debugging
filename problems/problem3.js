let eq = (lhs, rhs) => {
  if (Array.isArray(lhs)) {
    for (let i = 0; i < lhs.length; i++) {
      if (lhs[i] !== rhs[i]) return false
    }
    return true
  }
  return lhs === rhs

}
let verifyEquals = (lhs, rhs) => {
  if (!eq(lhs, rhs)) throw new Error("The expected output doesn't match the actual output")
}
// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  ['hello',5]
]

let outputs = [
  6,
  0,
  undefined
]

/*
Make this function return the sum of the two numbers that are passed to it. If the input array length is not 2, or if anything other than numbers are passed, return undefined.
*/
function f(input) {
  // if (input.length!==2 || 
  //   typeof(input[0]) !== 'number'||
  //   typeof(input[1]) !== 'number' )    
  //   {
  //     return undefined;
  //   }
  //   return input[0] + input[1];
  if (
    input.lenght < 2 ||
    input.some((num)=> {
      return typeof num !== 'number'
    })
  )
  {
    return undefined;
  }
  return input.reduce((sum , curr)=> {
    return sum + curr}, 0);
    
}

function runTest(i) {
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual)
}

runTest(0);
runTest(1);
runTest(2);
// runTest(3);
// runTest(4);
// runTest(5);
// runTest(6);
console.log("All tests passed for " + __filename)
