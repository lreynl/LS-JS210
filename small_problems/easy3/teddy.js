function rand() {
  var min = 20;
  var max = 200;
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log("Teddy is " + rand() + " years old.");