//Guessing the password
function login() {
  var tries = 3;
  var attempt = 1;
  var pw;
  while (attempt <= tries) {
    pw = prompt("What's the password?");
    if (pw == 'password') {
      console.log('You have successfully logged in.');
      return;
    } else {
      attempt++;
    }
  }
  console.log('You have been denied access.');
}

login();