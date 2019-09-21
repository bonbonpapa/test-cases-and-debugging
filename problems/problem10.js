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
    "hello world",
    "ALL YOUR BASE ARE BELONG"
]

let outputs = [
    "Hello World",
    "All Your Base Are Belong"
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

HINT:
   - Use a for loop to capitalize the letters one by one
   - Use the toUpperCase string method

*/
function f(str) {
    if ( typeof(str) !== "string" )
        return undefined;
    let strArr = str.split(" ");
    for (let i = 0; i < strArr.length; i++)
    {
        strArr[i] = strArr[i].toLowerCase();
        let fLetter = strArr[i].charAt(0).toUpperCase();
        strArr[i] = fLetter + strArr[i].slice(1);
        
    }
    return strArr.join(" ");
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
// runTest(2);
// runTest(3);
// runTest(4);

console.log("All tests passed for " + __filename)