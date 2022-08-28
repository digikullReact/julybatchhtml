// Callbacks and Async JS

//a callback is a **function**   passed as an argument to another function  (during a function call);

/*

function foo(callback){ // callback variable is a parameter
callback(2,3);
  
}

/**
function someName(){

}


//someName is a callback function
foo(function someName(a,b){

});  //  calling a foo function


function bar(a,b){
  let sum=a+b;

  
}
*/

//bar(7,8);




// Async callback --->

// first task was filling the cooler tank
// watching the pokemon


//callbacks --->
// this callback executed when the job is completed
/*
console.log("Watching Pokemon")

function FillCoolerTank(){

   //tap filling the bucket 
  setTimeout(function(){
    console.log("bucket filled");
    console.log("Put in water tank")
    
  },5000)

  
}

FillCoolerTank();

console.log("Watching Pokemon");

console.log("Watching Pokemon")
console.log("Watching Pokemon")

console.log("Watching Pokemon")

*/



//setTimeout --->

// setInterval

// these are provided to you by the browsers ,not js

//setTimeout is to execute the instructions after a given interval of time
/*
console.log("hello")

function sum(a,b){

  console.log(a+b);
  
}

setTimeout(function(){
  sum(5,9); // this function call will be executed after 3 seconds
  
},3000)

for(let i=0;i<10;i++){
  console.log("eheheheheh");
}
*/

//setInterval executes the instruction multiple times after given time period

function sum(a,b){

  console.log(a+b);
  
}

const interval=setInterval(function(){
  //sum(8,6);
  console.log(99);
},2000)

/*
setTimeout(()=>{
  clearInterval(interval);
},7000)
*/
