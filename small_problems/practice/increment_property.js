//increment property
function incrementProperty(wins, player) {
  if (Object.keys(wins).includes(player)) {
    wins[player] += 1;
  } else {
    wins[player] = 1;
  }
  return wins[player];
}

var wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }
