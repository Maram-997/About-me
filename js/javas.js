'use strict';
let userName = prompt('Hey There, Tell Me What\'s Your Name?:)');
alert('Welcome ' + userName);
let score = 0;

function q1() {
  let x = prompt('Do I love desserts? (yes or no)').toLowerCase();
  if (x == 'yes' || x == 'y') {
    alert('yes That\'s right');
    console.log('true');
    score++;
  }
  if (x == 'no' || x == 'n') {
    alert('You missed this.');
  }
}
q1();


function q2() {
  let y = prompt('Do I watch Anime?').toLowerCase();
  if (y == 'yes' || y == 'y') {
    alert('yes That\'s right');
    console.log('true');
    score++;
  }
  else if (y == 'no' || y == 'n') {
    alert('You missed this.');
  }
}

q2();

function q3() {
  let z = prompt('Am I a sleepy Person ').toLowerCase();
  if (z == 'no' || z == 'n') {
    alert('That\'s right');
    console.log('true');
    score++;
  }
  else if (z == 'yes' || z == 'y') {
    alert('You missed this.');
  }
}
q3();


function q4() {
  let a = prompt('Do I enjoy Coding?').toLowerCase();
  if (a == 'yes' || a == 'y') {
    alert('yes That\'s right');
    console.log('true');
    score++;
  }
  else if (a == 'no' || a == 'n') {
    alert('You missed this too.');
  }
}
q4();

function q5() {
  let b = prompt('Am I raising a pet?').toLowerCase();
  if (b == 'no' || b == 'n') {
    alert('That\'s right');
    console.log('true');
    score++;
  }
  else if (b == 'yes' || b == 'y') {
    alert('You missed this too.');
  }
}
q5();



alert('Well Well, Not Bad Hope We Know Each Other Better Next Time, ' + userName);

function q6() {
  let c = prompt('And now I\'m gonna Ask you to guess my favourite number, from 1 - 10 , you only have four attempts! ');

  for (i = 1; i <= 4; i++) {
    if (c < 3) {
      c = prompt('Too Low, try Another');
    }
    else if (c > 3) {
      c = prompt('Too High,Try Another');
    }
    else if (c == 3) {
      alert('You Geussed it Right!');
      console.log('true');
      score++;
    }
  }

}
q6();

function q7() {
  let dessert = ['cheesecake', 'pancake', 'waffles', 'cake', 'brownies'];
  let m = prompt('Now can you Gess which kind of dessets I prefer;I\'ll make it easier for you and tell you it\'s not arabian desserts? ');
  let flag = true;
  for (let n = 1; n < 6; n++) {
    for (let l = 0; l < dessert.length; l++) {


      if (m === dessert[l]) {
        alert('You got it RIGHT.');
        score++;
        flag = true;

        break;
      }

    }
    if (flag === true) {
      break;
    }
    if (flag === false); {
      m = prompt('Guess again !!');

    }
  }
}
q7();


alert('And here is the right answers  : ' + dessert);
alert('Your Score is ' + score);
