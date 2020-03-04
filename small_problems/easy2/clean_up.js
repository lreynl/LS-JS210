//Clean up the words
function cleanUp(str) {
  var regex = /[^A-Z]+/gi;
  return str.replace(regex, ' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "