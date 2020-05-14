// Code your solutions in this file

const names = ["Lisa", "Kaitlin", "Jan"];
const events = ["surprise"];
function writeCards(names,events){
 let array = []
  for (let i = 0; i < names.length; i++){
     array.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
  }
  return array;
}

function countDown(num){
  let i=num;
  while(i>=0){
    console.log(i);
    i--;
  }
}
countDown(10);
