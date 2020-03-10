//after midnight 2
var MINUTES_IN_DAY = 1440;
var MS_IN_SEC = 1000;
var SEC_IN_MIN = 60;
var midnight = '1/1/2020 00:00';

function beforeMidnight(time) {
  return (MINUTES_IN_DAY - afterMidnight(time)) % MINUTES_IN_DAY;
}

function afterMidnight(time) {
  time = time.split(':');

  var date = new Date(midnight);
  var after = new Date(midnight);  
  var hours = String(time[0]);
  var minutes = String(time[1]);
  var minutesAfter;
  
  after.setHours(hours);
  after.setMinutes(minutes);
  minutesAfter = after - date;
  
  return (minutesAfter / MS_IN_SEC) / SEC_IN_MIN;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('00:01'));       // 1
console.log(beforeMidnight('00:01'));      // 1439
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686