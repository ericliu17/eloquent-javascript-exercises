//Ch 5 - Mother-Child Age Difference

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var ageDiff = ancestry.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

//OR

function ageDiff() {
  var ageDiff = [];
  ancestry.forEach(function(person) {
    for (var prop in byName)
      if (prop == person.mother)
        ageDiff.push(person.born - byName[prop].born);
  });
  return ageDiff;
};

console.log(average(ageDiff));
// → 31.2