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
  "hey hello morning",
  "Make this function return",
  "If multiple words have the same length, return the last one that matches.",
  "You'''ll need to use the split string method",
  "A for loop might be helpful"

]

let outputs = [
  "morning",
  "function",
  "matches.",
  "You'''ll",
  "helpful"
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.

Example
  f("hey hello morning") returns "morning"

HINTS: 
   - You'll need to use the split string method
   - A for loop might be helpful
*/
function f(str) {
  if ( str === "")
      return "";
  let arrStr = [];
  arrStr = str.split(" ");
  let maxLen = "";
  for (let i = 0; i < arrStr.length; i++)
  {
    let tempStr = arrStr[i];
    if (tempStr.length >= maxLen.length)
      maxLen = tempStr;
  }
  return maxLen;
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
