//word count
function wordCount(str) {
  str = str.split(' ');
  var count = {};
  var word;
  for (word in str) {
    if (count[str[word]]) {
     count[str[word]] += 1;
    } else {
      count[str[word]] = 1;
    }
  }
  
  return count;
}
console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }