//Ch 4 - The Sum Of A Range

function range(start, end, step) {
  if (step == null) step = 1;
  var numbers = [];
  
  if (step > 0) {
    for (var i = start; i <= end; i += step)
      numbers.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      numbers.push(i);
  } 
  
  return numbers;
}

function sum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++)
    sum += array[i];
  return sum;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]