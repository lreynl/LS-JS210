function tipCalc() {
  var amount = parseFloat(prompt("What is the bill?"));
  var percentage = parseFloat(prompt("What is the tip percentage?"));
  
  var tip = amount * (percentage / 100.0);
  var total = parseFloat(tip + amount);
  
  console.log("The tip is " + tip.toFixed(2));
  console.log("The total is " + (tip + amount).toFixed(2));
}

tipCalc();