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
// we need 7 test cases. 
let inputs = [
    ["foo", 3],
    ["fo", 3],
    ["Hello", 5],
    ["Hello ", 5],
    [{ff: "foo"}, 3],
    ["fo", -1],
    ["fo", "fo"]
]

let outputs = [
    "foofoofoo",
    "fofofo",
    "HelloHelloHelloHelloHello",
    "Hello Hello Hello Hello Hello ",
    undefined,
    "",
    undefined
]

/*
The function input is an array as input. The first element of the array is a string. The second is a number.
Make this function return the string repeated as many times as specified by the second element of the array. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // ""
*/
function f(arr) {
    if ( typeof arr[0] !== "string" ||
         typeof arr[1] !== "number" )
        {
            return undefined;
        }
    let rtStr = "";
    if ( arr[1] <=0 )
        rtStr = "";
    else {
        for (let i = 0; i < arr[1]; i++)
            rtStr = rtStr.concat(arr[0]);
            //ret += str;
    }
    
    return rtStr;
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
runTest(6);
console.log("All tests passed for " + __filename)
