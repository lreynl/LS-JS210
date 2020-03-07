function greetings(arr, obj) {
  var name = arr.join(' ');
  var title = obj.title;
  var occupation = obj.occupation;
  var greeting = "Hi, " + name + ". Looks like you're a " + title + " " + occupation + ".";
  return greeting;
}

console.log(greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' }));