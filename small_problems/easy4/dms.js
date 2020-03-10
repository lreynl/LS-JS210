//cute angles
var DEGREE = '°';
var SMD = 60;//seconds in minute; minutes in degree
var CIRCLE = 360;//degrees in revolution

function addZero(num) {
  return String(num).length < 2 ? '0' + num : num;
}

function dms(angle) {
  var deg;
  var min;
  var sec;
  
  angle %= CIRCLE;
  if (angle < 0) angle = CIRCLE + angle;
  
  deg = Math.floor(angle);
  angle = angle - Math.floor(angle);
  angle *= SMD;
  min = Math.floor(angle);
  angle = angle - Math.floor(angle);
  angle *= SMD;
  sec = Math.floor(angle) % SMD;
  
  if (sec == SMD) {
    sec = 0;
    min += 1;
  }
  
  if (min == SMD) {
    min = 0;
    deg += 1;
  }
  
  deg %= CIRCLE;
  
  return deg + DEGREE + addZero(min) + "'" + addZero(sec) + '"';
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"