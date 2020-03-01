function rotate(chr, chrCodeStart) {
  var rotateAmount = 13;
  var alphabetLen = 26;
  chr -= chrCodeStart;
  chr += rotateAmount;
  chr %= alphabetLen;
  chr += chrCodeStart;
  return chr;
}

function rot13(str) {
  var i;
  var chr;
  var len = str.length;
  var rotated = '';
  var upperCaseStart = 65;
  var upperCaseEnd = 90;
  var lowerCaseStart = 97;
  var lowerCaseEnd = 122;

  for (i = 0; i < len; i++) {
    chr = str.charCodeAt(i);

    if (chr >= upperCaseStart && chr <= upperCaseEnd) {
      chr = rotate(chr, upperCaseStart);
    } else if (chr >= lowerCaseStart && chr <= lowerCaseEnd) {
      chr = rotate(chr, lowerCaseStart);
    }

    rotated += String.fromCharCode(chr);
  }

  return rotated;
}