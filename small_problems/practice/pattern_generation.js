//Pattern generation
function getLength(num) {
  str = '';
  for (var i = 1; i <= num; i++) {
    str += i;
  }
  return str.length;
}

function generatePattern(num) {
  var str;
  var len;
  var strLen = getLength(num);
  for (var i = 1; i <= num; i++) {
    str = '';
    len = strLen;
    for (var j = 1; j <= i; j++) {
      str += j;
      len -= String(j).length;
    }
    
    for (var k = 1; k <= len; k++) {
      str += '*';
    }
    
    console.log(str);
  }
}

generatePattern(20);