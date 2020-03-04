//Madlibs
function getAnswers(list) {
  Object.keys(list).forEach(function(key) {
    var answer = prompt("Enter " + key + ': ');
    list[key] = answer;
  });  
}

function showMadlib(list) {
  console.log("Do you " + list['a verb'] + " your " + list['an adjective'] + ' ' +
              list['a noun'] + ' ' + list['an adverb'] + '? That\'s hilarious!');
}

function madlib() {
  var list = { 'a noun': '',
               'a verb': '',
               'an adjective': '',
               'an adverb': '' };
  
  getAnswers(list);
  showMadlib(list);
}

madlib();