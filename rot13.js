//ROT13
function rotate(chr, chrStart) {
  var ROTATE_AMOUNT = 13;
  var ALPHABET_LEN = 26;
 
  chrStart = chrStart.charCodeAt(0);
  chr = chr.charCodeAt(0);
  
  chr -= chrStart;
  chr += ROTATE_AMOUNT;
  chr %= ALPHABET_LEN;
  chr += chrStart;
  
  return String.fromCharCode(chr);
}

function rot13(str) {
  var i;
  var chr;
  var len = str.length;
  var rotated = '';
  var upperStart = 'A';
  var lowerStart = 'a';

  for (i = 0; i < len; i++) {
    chr = str[i];
    
    if (chr >= 'A' && chr <= 'Z') {
      chr = rotate(chr, upperStart);
    } else if (chr >= 'a' && chr <= 'z') {
      chr = rotate(chr, lowerStart);
    }

    rotated += chr;
  }

  return rotated;
}