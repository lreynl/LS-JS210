function retire() {
  var age = parseInt(prompt("How old are you?"));
  var retireBy = parseInt(prompt("At what age do you want to retire?"));
  var date = new Date();
  var year = date.getFullYear();
  console.log(typeof year);
  console.log("It's " + year + " now. You'll retire in " + 
             (year + retireBy - age) + '. ' + (retireBy - age) + 
             ' years to go.');
}

retire();