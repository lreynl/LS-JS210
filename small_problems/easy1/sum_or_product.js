function sum(num) {
  var i;
  var result = 0;
  for (i = 1; i <= num; i++) { 
    result += i 
  }
  
  return result;
}

function product(num) {
  var i;
  var result = 1;
  for (i = 1; i <= num; i++) {
    result *= i;
  }
  
  return result;
}

function sumOrProduct() {
  var num = parseInt(prompt("Please enter an integer greater than 0:"));
  var sumOrProd = prompt('Enter "s" to compute the sum, or "p" to compute the product.');
  var result;
  var msg = '';
  var operation;
  if (sumOrProd.toLowerCase() == 's') {
    result = sum(num);
    operation = 'sum';
  } else if (sumOrProd.toLowerCase() == 'p') {
    result = product(num);
    operation = 'product';
  }
  
  msg = "The " + operation + " of the integers between 1 and " + num + " is " + result;
  return msg;
}

console.log(sumOrProduct());