// Code your solutions in this file

const names = ["Liza", "Kaitlin", "Jan"];
const events = ["birthday"];
function writeCards(names,events){
 let greeting = []
  for (let i = 0; i < names.length; i++){
     greeting.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
  }
  return greeting;
}

function countDown(num){
  let i=num;
  while(i>=0){
    console.log(i);
    i--;
  }
}
countDown(10);
