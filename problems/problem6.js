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
// we need 6 test cases. 
let inputs = [
  ["add", 10, 20],
  ["chair", 20, 10],
  ["sub", 10, 20],
  ["mult", 10, 20],
  ["mult", -20, -10],
  ["add", -100, 200]
]

let outputs = [
  30,
  undefined,
  -10,
  200,
  200,
  100
]

/*
The function takes an array. The array has length 3. The first element of the array is a string that represents an operation.
If the operation is "add", return the sum of the two other elements of the array. "sub" return their difference. "mult" return their product.  
Anything else return undefined. 
For example:
f(["add", 10, 20]); // 30
f(["mult", 2, 3]); // 6
f(["spoof", 10, 10]); // undefined

*/
function f(arr) {
  if ( arr.length !== 3 ||
      !(arr[0] === "add" || arr[0] === "mult" || arr[0] === "sub")
    )
    return undefined;
  let rtValue;
    switch (arr[0])
      {
        case "add":
        rtValue = arr[1] + arr[2];
        break;
        case "sub":
        rtValue = arr[1] - arr[2];
        break;
        case "mult":
        rtValue = arr[1] * arr[2];
        break;
      }
    return rtValue;
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
runTest(5);
console.log("All tests passed for " + __filename)