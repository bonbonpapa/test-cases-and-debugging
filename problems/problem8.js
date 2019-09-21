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
    "AAACCC",
    "how are you",
    "A c b",
    "A c b?",
    "how are you? "
]

let outputs = [
    "CCCAAA",
    "uoy era woh",
    "b c A",
    "?b c A",
    " ?uoy era woh"
]

/*
Make this function return the input string, reversed. For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
You must use at least one for loop for this exercise.

HINTS: 
 - Create an empty array
 - Add each character of the string to that empty array (use the array method push). You'll need to use a for loop
 - Create another empty array
 - Add each character of the string to new empty array in reverse order
 - Convert that array back to a string (use the join array method)
 
*/
function f(str) {
    let arr1 = [];
    for (let i = 0; i < str.length; i++)
        arr1.push(str[i]);
    let arr2 = [];
    for (i = 0; i < arr1.length; i++)
        arr2[i] = arr1[(arr1.length -1) - i];

    let newStr = arr2.join("");

    return newStr;
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
