//swap name
function swapName(name) {
  name = name.split(' ');
  var len = name.length;
  name = name.slice(len - 1) + ', ' + 
         name.slice(0, len - 1).join(' ');
         
  return name;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Billy Dee Williams'));
