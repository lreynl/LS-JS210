//Bannerizer (further exploration)
var MAX_WIDTH = 76;

function innerLine(width) {
  var line = '';
  var i;
  line += '|';
  for (i = 0; i <= width + 1; i++) {
    line += ' ';
  }
  line += '|';
  console.log(line);
}

function outerLine(width) {
  var line = '';
  var i;
  line += '+';
  for (i = 0; i <= width + 1; i++) {
    line += '-';
  }
  line += '+';
  console.log(line);
}

function textLine(text, width) {
  var line = '|' + ' ' + text;
  while (width == MAX_WIDTH && line.length <= MAX_WIDTH + 2) {
    line += ' ';
  }
  line += '|';
  console.log(line);
}

function printText(text, width) {
  text = text.split(' ');
  var line = '';
  while (text.length > 0) {
    while(true) {
      if (text.length === 0) {
        textLine(line, width);
        break;
      } else if (line.length + text[0].length > MAX_WIDTH) {
        textLine(line, width);
        line = '';
      } else {
        line += text.shift();
        line += ' ';
      }
    }
  }
}

function printInBox(text) {
  var width = text.length > MAX_WIDTH ? MAX_WIDTH : text.length;
  outerLine(width);
  innerLine(width);
  printText(text, width);
  innerLine(width);
  outerLine(width);
}

printInBox('To boldly go where no one has gone before.');
printInBox('');
printInBox('Modify this method so it will truncate the message if it will be ' +
             'too wide to fit inside a standard terminal window (80 columns, ' +
             'including the sides of the box). For a real challenge, try word ' +
             'wrapping very long messages so they appear on multiple lines, but ' +
             'still within a box.');
printInBox('If pattern is a String, then its contents are used as the ' +
           'delimiter when splitting str. If pattern is a single space, ' +
           'str is split on whitespace, with leading whitespace and runs ' +
           'of contiguous whitespace characters ignored. ' +
           'If pattern is a Regexp, str is divided where the pattern matches. ' +
           'Whenever the pattern matches a zero-length string, str is split ' +
           'into individual characters. If pattern contains groups, the ' +
           'respective matches will be returned in the array as well.');