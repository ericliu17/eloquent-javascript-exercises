//Ch 5 - Historical Life Expectancy

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(array, group) {
  var groups = {};
  array.forEach(function(person) {
    var groupName = group(person);
    if (groups[groupName] != null)
      groups[groupName].push(person);
    else
      groups[groupName] = [person];
  });
  return groups;
}

function avgAgeByGroup(list) {
  for (var prop in list) {
    var avg = average(list[prop].map(function(person) {
      return person.died - person.born;
    }));
    console.log(prop + ": " + avg);
  };
}
  
avgAgeByGroup(groupBy(ancestry, function(person) {
                   return Math.ceil(person.died/100);
}));

avgAgeByGroup(groupBy(ancestry, function(person) {
                   return Math.ceil(person.born/100);
}));

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94