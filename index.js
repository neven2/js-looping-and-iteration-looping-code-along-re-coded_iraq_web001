// Code your solutions in this file


function writeCards(arr,string2){
 let array = []
  for (let i = 0; i < arr.length; i++){
     array.push(`Thank you, ${arr[i]}, for the wonderful ${string2} gift!`);
  }
  return array;
}
writeCards(["Lisa", "Kaitlin", "Jan"],"surprise");

function countDown(num){
  let i=num;
  while(i>=0){
    console.log(i);
    i--;
  }
}
countDown(10);
