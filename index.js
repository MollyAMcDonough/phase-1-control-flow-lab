
function scuberGreetingForFeet(feet){
  // Write your code here!
  let greeting;
  if (feet<=400) {
    greeting = 'This one is on me!';
  } else if (feet>2500){
    greeting = 'No can do.';
  } else if (feet>2000){
    greeting = 'I will gladly take your thirty bucks.';
  } 
  return greeting;
}

function ternaryCheckCity(city){
  // Write your code here!
  return (city==='NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let goodBye;
  switch(tip){
    case 'generous':
    goodBye = 'Thank you so much.';
    break;
    case 'not as generous':
    goodBye = 'Thank you.';
    break;
    default:
    goodBye = 'Bye.';
    break;
  }

  return goodBye;
}