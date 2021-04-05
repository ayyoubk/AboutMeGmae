'use strict';

let userName=prompt('What is your name ?');
alert('welcome '+userName);
//console.log('user name is '+userName);

function guessGame() {
  let answerOne=prompt('Do you think it is strange for a civil engineer to be a software developer as well?');
  answerOne=answerOne.toLowerCase();
  switch (answerOne) {
  case 'yes':
  case 'y':
    alert('No, this is not strange, I am a civil engineer, passionate about software development');
    break;
  case 'no':
  case 'n':
    alert('Right, Superman is a civil engineer too ..');
    break;
  default:
    alert('Nice try !');
  }

  //console.log(answerOne);

  let answerTwo=prompt('Do you think I am doing well with software development ?');
  answerTwo=answerTwo.toLowerCase();
  switch (answerTwo) {
  case 'yes':
  case 'y':
    alert('Thank you, but I think I need more effort and work');
    break;
  case 'no':
  case 'n':
    alert('Thank you, I will do my best');
    break;
  default:
    alert('Nice try !');
  }

  //console.log(answerTwo);

  let football=prompt('Do you think I watch football matches ?');
  football=football.toLowerCase();
  switch (football) {
  case 'yes':
  case 'y':
    alert('Yes, I really do :)');
    break;
  case 'no':
  case 'n':
    alert('No, in fact, I am a big fan of football matches');
    break;
  default:
    alert('Nice try !');
  }
  //console.log(football);
  let favTeam=prompt('Do you think my favorite team is Real Madrid ?');
  favTeam=favTeam.toLowerCase();
  switch (favTeam) {
  case 'yes':
  case 'y':
    alert('It\'s easy to guess Real Madrid is my favorite club');
    break;
  case 'no':
  case 'n':
    alert('Unfortunately, I am a Real Madrid fan :)');
    break;
  default:
    alert('Nice try !');
  }
  //console.log(favTeam);
  alert('Thanks for your time, '+userName);
}


let aboutMe=prompt('Do you want to guess some information about the owner?');
aboutMe=aboutMe.toLowerCase();
switch (aboutMe) {
case 'yes':
case 'y':
  alert('Well let\'s start');
  guessGame();
  break;
case 'no':
case 'n':
  alert('Well, have a nice day');
  break;
default:
  alert('Nice try !');
}
//console.log(aboutMe);


