
const assert = require("node:assert/strict");

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

assert.equal(add(2, 3), 5, "Addition test failed");
assert.equal(multiply(2, 3), 6, "Multiplication test failed");

console.log("Addition test passed!");
console.log("Multiplication test passed!");
