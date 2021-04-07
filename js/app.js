'use strict'; 

let score=0;
function qOne(){
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
  score++;
  break;
default:
  alert('Nice try !');
}
}

let userName=prompt('What is your name ?');
alert('welcome '+userName);
//console.log('user name is '+userName);

let game =confirm('Do you want to Play Guessing Game');
if (game) {
  alert('Well let\'s start');
  qOne();
  }


  

  //console.log(answerOne);

  let answerTwo=prompt('Do you think I am doing well with software development ?');
  answerTwo=answerTwo.toLowerCase();
  switch (answerTwo) {
  case 'yes':
  case 'y':
    alert('Thank you, but I think I need more effort and work');
    score++;
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
    score++;
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
    score++;
    break;
  case 'no':
  case 'n':
    alert('Unfortunately, I am a Real Madrid fan :)');
    break;
  default:
    alert('Nice try !');
  }

  let aboutMe=prompt('Do you think that I am an alien?');
  aboutMe=aboutMe.toLowerCase();
  switch (aboutMe) {
  case 'yes':
  case 'y':
    alert('Oh really?');
    break;
  case 'no':
  case 'n':
    alert('Yes!!');
    score++;
    break;
  default:
    alert('Nice try !');
  }

  let numberIs=Math.floor(Math.random() * 11);
  for (let i = 1; i<=4 ; i++) {
    let guessNum= prompt('Enter a number from 0 to 10');
    guessNum =parseInt(guessNum);
    while (guessNum !== 0 && guessNum !== 1 && guessNum !== 2 && guessNum !== 3 && guessNum !== 4 && guessNum !== 5 && guessNum !== 6 && guessNum !== 7 && guessNum !== 8 && guessNum !== 9 && guessNum !== 10) {
      guessNum= prompt(' You should enter a number from 0 to 10');
      guessNum =parseInt(guessNum);
    }
    if (guessNum === numberIs) {
      alert('Well done, you hit the right Number');
      score=score+1;
      break;
    }else if (guessNum > numberIs){
      alert('too High');
    }else {
      alert ('too Low');
    }
    if (i===4) {
      alert('Well, You have exhausted all attempts, the correct answer is ' + numberIs);
    }
  }
  let cars = ['bmw', 'audi', 'ford','honda'];
  //console.log(cars[0]);
  lastQus : for (let atmp = 1; atmp <=6; atmp++){
    let favCar =prompt('Guess my favorite car').toLowerCase();
    for (let iii =0;iii < cars.length ; iii++ ){
      if (favCar=== cars[iii]) {
        alert('Great, correct answer !!');
        score++;
        break lastQus;
      }
    }
    if (atmp===6) {
      alert('Well, You have exhausted all attempts, My favorite car are ' + cars);
    }
  }


  alert('Thanks for your time, '+userName +' You get '+ score +' / 7');



// Math.floor(Math.random() * 11); // fo r random number  0-10

