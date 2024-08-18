"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateArray = exports.palindromString = exports.palindromNumber = exports.secondLargest = void 0;
function secondLargest(arr) {
    let n = arr.length;
    if (n == 0)
        return 'No elements in array';
    if (n == 1)
        return 'Array does not have a second element';
    let first = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < n; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        }
        else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }
    return second === -Infinity ? 'No second unique element' : second;
}
exports.secondLargest = secondLargest;
function palindromNumber(num) {
    let n = num;
    let reversed = 0;
    while (n > 0) {
        let digit = n % 10;
        reversed = (reversed * 10) + digit;
        n = Math.floor(n / 10);
    }
    return num === reversed;
}
exports.palindromNumber = palindromNumber;
// console.log("zzzzzzzzzzzz",palindromNumber(313));
function palindromString(s) {
    let palindrom = true;
    const val = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for (let i = 0; i < (val.length) / 2; i++) {
        console.log(val[i], "============", val[(val.length - i) - 1]);
        if (val[i].toUpperCase() != val[(val.length - i) - 1].toUpperCase()) {
            return false;
        }
    }
    return palindrom;
}
exports.palindromString = palindromString;
// console.log("zzzzzzzzzzzz",palindromString("A man a plan a canal Panama"));
function rotateArray(arr, r) {
    let rArr = [];
    for (let i = 0; i < arr.length; i++) {
        rArr[(r + i) % arr.length] = arr[i];
    }
    return rArr;
}
exports.rotateArray = rotateArray;
;
console.log(rotateArray([1, 2, 3, 4, 5], 2));
