//letter counter pt 1
function wordSizes(str) {
  if (str.length === 0) return {};
  
  var count = {};
  str = str.split(' ');
  
  str.forEach(function(elem) {
    if (count[elem.length]) {
      count[elem.length] += 1;
    } else {
      count[elem.length] = 1;
    }
  });
  
  return count;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}