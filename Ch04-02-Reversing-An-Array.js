//Ch 4 - Reversing An Array

function reverseArray(array) {
  var newArray = [];
  for (var i = array.length-1; i >= 0; i--)
    newArray.push(array[i]);
  return newArray;
}

function reverseArrayInPlace(array) {
  var n = Math.floor(array.length/2);
  for (var i = 0; i < n; i++) {
    var x = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = x;
  }
  return array
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]