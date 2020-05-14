// Code your solutions in this file

const arr=["Lisa", "Kaitlin", "Jan"];
function writeCards(arr,string1){
  const array=[];
for(let i=0;i<arr.length;i++){

  array.push("Thak you, "+arr[i]+", for the wonderful "+string1+" gift!");
 
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
