//Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
//If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “Didn’t know? ECMAScript!”
let message = prompt('What\'s the "Official" name of Javascript?', '');
if (message == "EMCAScript") {
  alert('Right!');
} else {
  alert('You don\'t know? "EMCAScript"!');
}




//Using if..else, write the code which gets a number via prompt and then shows in alert:
//1, if the value is greater than zero,
//-1, if less than zero,
//0, if equals zero.
//In this task we assume that the input is always a number.
let promptString = prompt("");
//number = Number(promptString);

if (number > 0) {
  alert(1);
} else if (number < -1) {
  alert(-1);
} else if (number = 0) {
  alert(0);
}




//Write the code which asks for a login with prompt.
//If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled.”, if it’s another string – then show “I don’t know you”.
//The password is checked as follows:
//If it equals “TheMaster”, then show “Welcome!”,
//Another string – show “Wrong password”,
//For an empty string or cancelled input, show “Canceled.”

let userName = prompt("Who's there?");
if (userName == "Admin") {
  let password = prompt("Password?");
  if (password == "TheMaster") {
    alert("Welcome!");
  } else if (password == "" || password == null) {
    alert("Canceled.");
  } else {
    alert("Wrong password");
  }
} else if (userName == "" || userName == null) {
  alert("Canceled.");
} else {
  alert("I don't know you");
}




//Rewrite this if using the ternary operator '?':
//if (a + b < 4) {
//  result = 'Below';
//} else {
//  result = 'Over';
//}
let result = (a + b < 4) ? 'Below': 'Over';




//Rewrite if..else using multiple ternary operators '?'.
//For readability, it’s recommended to split the code into multiple lines.
//let message;
//if (login == 'Employee') {
//  message = 'Hello';
//} else if (login == 'Director') {
//  message = 'Greetings';
//} else if (login == '') {
//  message = 'No login';
//} else {
//  message = '';
//}
let message = (login == 'Employee') ? 'Hello':
  (login == 'Director') ? 'Greetings':
  (login == '') ? 'No login':
  '';
