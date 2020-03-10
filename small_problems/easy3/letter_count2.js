//letter count pt 2
function wordSizes2(str) {
  if (str.length === 0) return {};
  
  var count = {};
  str = str.split(' ');
  
  str.forEach(function(elem) {
    elem.replace(/[^a-z]/gi, '');
    
    if (count[elem.length]) {
      count[elem.length] += 1;
    } else {
      count[elem.length] = 1;
    }
  });
  
  return count;
}

console.log(wordSizes2('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes2('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes2("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes2(''));                                            // {}