//Splitting a string
function splitString(str, delim) {
  if (typeof delim === 'undefined') {
    console.log('ERROR: no delimiter');
    return;
  }
  var temp = '';
  var i;
  var len = str.length;
  if (delim === '') {
    for (i = 0; i < len; i++) {
      console.log(str[i]);
    }
  } else {
    for (i = 0; i < len; i++) {
      if (str[i] === delim) {
        if (temp.length > 0) console.log(temp);
        temp = '';
      } else {
        temp += str[i];
      }
    }
  }
  if (temp.length > 0) console.log(temp);
}

splitString('abc,123,hello world,testing', ',');
splitString('hello');
splitString('hello', '');