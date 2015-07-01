//Ch 5 - Flattening

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(n, m) {
  return n.concat(m);
}));
// → [1, 2, 3, 4, 5, 6]