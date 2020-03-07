//objects stuff
function radToDeg(rad) {
  return rad * 180 / Math.PI;
}

console.log(radToDeg(1));

//
function toPositive(num) {
  return Math.abs(num);
}

console.log(toPositive(-180));

//
console.log(Math.sqrt(16777216));

//
console.log(Math.pow(16, 6));

//return 50 for each
var a = 50.72;
var b = 49.2;
var c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

//random
function random(min, max) {
  if (min === max) return min;
  if (min > max) {
    var temp = min;
    min = max;
    max = temp;
  }
  
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(random(5,10));

//date
var today = new Date();
console.log(today);

//
console.log("Today's day is " + today.getDay());

//
var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function suffix(date) {
  if (date > 3 && date < 21) return 'th';
  date = String(date);
  var dateLast = parseInt(date[date.length - 1]);
  switch (dateLast) {
    case 1:
      return 'st';
      break;
    case 2:
      return 'nd';
      break;
    case 3:
      return 'rd';
      break;
  }
}

function formattedMonth(today) {
  return months[today.getMonth()];
}

function formattedDay(today) {
  return today.getDate() + suffix(today.getDate());
}

console.log("Today is " + daysOfWeek[today.getDay()] + ", " + formattedMonth(today) + ' ' + formattedDay(today));

//
console.log(today.getYear());
console.log(today.getFullYear());

//
console.log(today.getTime());

//
var tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
console.log(tomorrow);
console.log(today);

//
var nextWeek = new Date(today.getTime());
console.log(nextWeek === today);
console.log(today.toDateString() === nextWeek.toDateString());

//
function formatTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (minutes.length <= 1) minutes = '0' + minutes;
  return hours + ':' + minutes;
}

console.log(formatTime(today));