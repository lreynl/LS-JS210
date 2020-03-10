function addZero(minutes) {
  var time;
  minutes = String(minutes);
  if (minutes.length < 2) {
    time = '0' + minutes;
  } else {
    time = minutes;
  }
  return time;
}

function timeOfDay(minutes) {
  var date = new Date('1/1/2020 00:00');
  var time = '';
  date.setMinutes(minutes);
  time += date.getHours() + ':' + addZero(date.getMinutes());
  return time;
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"