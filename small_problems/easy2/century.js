//What century is that
function suffix(century) {
  var last_two = century % 100;
  var last = last_two % 10;
  var suffix;
  switch (last) {
    case 1:
      suffix = (last_two == 11 ? 'th' : 'st');
      break;
    case 2:
      suffix = (last_two == 12 ? 'th' : 'nd');
      break;
    case 3:
      suffix = (last_two == 13 ? 'th' : 'rd');
      break;
    default:
      suffix = 'th';
  }  
  return suffix;
}

function year_to_century(year) {
  return Math.ceil(year / 100);
}

function century(year) {
  var century = year_to_century(year);
  return String(century) + suffix(century);
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"