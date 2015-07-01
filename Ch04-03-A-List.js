//Ch 4 - A List

function prepend(a, b) {
  return list = {value: a, rest: b};
}

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = prepend(array[i], list);
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function nth(list, n) {
  return listToArray(list)[n];
}

function nth_recur(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth_recur(list.rest, n-1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth_recur(arrayToList([10, 20, 30]), 1));
// → 20