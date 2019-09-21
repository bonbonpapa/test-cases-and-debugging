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
// we need 5 test cases. 
let inputs = [
  [2, 7],
  [10,9],
  // ["hello",1],
  // [9,"hello"],
  // ["hello","hello"],
  [-10,1],
  [10,-1],
  [-10,-1]
]

let outputs = [
  14,
  90,
  // undefined,
  // undefined,
  // undefined,
  -10,
  -10,
  10  
]

/*
The input of the function is an array.
Make this function return the product of the two numbers in the array. If the input array length is not 2, or if anything other than numbers are passed, return undefined.
*/
function f(input) {
  if (input.length !== 2 ||
     typeof input[0] !== "number" ||
     typeof input[1] !== "number" )
     {
       return undefined;
      }
  let prodArray =  input.reduce((total, num)=>{ return total * num; });
  return prodArray;

}

function runTest(i) {
  if (i > inputs.length) throw new Error("You do not have enough test cases");
  let expected = outputs[i];
  console.log(expected);

  let actual = f(inputs[i]);
  console.log(actual);

  verifyEquals(expected, actual)
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log("All tests passed for " + __filename)
