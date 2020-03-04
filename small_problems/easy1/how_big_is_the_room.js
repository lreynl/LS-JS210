function area_sq_m(l, w) {
  return l * w;
}

function area_sq_ft(l, w) {
  const SQ_FT_IN_SQ_M = 10.7639;
  return (area_sq_m(l, w) * SQ_FT_IN_SQ_M).toFixed(2);
}

function getArea() {
  var l = parseInt(prompt("Enter the length of the room in meters: "));
  var w = parseInt(prompt("Enter the width of the room in meters: "));
  var msg = "The area of the room is " +
            area_sq_m(l, w) + " square meters " +
            "(" + area_sq_ft(l, w) + " square feet)";
  return msg;
}

console.log(getArea());