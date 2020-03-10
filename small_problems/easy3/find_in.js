function getInput() {
  var userInput = prompt("Enter 5 numbers seperated by a space");
  var find = prompt("Enter a sixth number");
  userInput = userInput.split(' ');
  return [userInput, find];
}

function findNumberIn() {
  var text;
  var input = getInput();
  if (input[0].includes(input[1])) {
    text = "The number " + input[1] + " appears in [" + input[0] + ']';
  } else {
    text = "The number " + input[1] + " does not appear in [" + input[0] + ']';
  }
  return text;
}

console.log(findNumberIn());