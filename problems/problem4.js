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
// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello", 4],
  ["", 2],
  ["ppp6",-1],
  ["bye",3],
  ["bye",2],  
  ["good Bye",5],
  ["good bye",5],
  ["good bye",4]
]

let outputs = [
  "o",
  undefined,
  undefined,
  undefined,
  "e",
  "B",
  "b",
  " "
]

/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.

For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a

*/
function f(arr) {
  let iIndex = arr[1];
  if ( iIndex >= arr[0].length || 
       iIndex < 0 )
       return undefined;
  let letterChar = arr[0].charAt(iIndex);

  return letterChar;
}

function runTest(i) {
  let expected = outputs[i];
  let input = inputs[i];
  let actual = f(input);
  verifyEquals(expected, actual)
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
runTest(7);
console.log("All tests passed for " + __filename)
