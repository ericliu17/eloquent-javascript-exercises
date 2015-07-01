//Ch 4 - Deep Comparison

function deepEqual(a, b) {

  if (typeof a != "object" || a == null ||
      typeof b != "object" || b == null)
    return a === b;

  var propa = 0, propb = 0;
  
  for (var property in a)
    propa++;
  for (var property in b) {
    propb++;
    if (!(property in a) || !deepEqual(a[property], b[property]))
      return false;
  }
  
  return propa == propb;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true