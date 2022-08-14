//Scopes and hoisting --->
//Global variables ,i can use them anywhere in my script
// in this particular file
/*
let c=9;
var k=88;
const j="hello";


function Pune(){
  //l1 ,l2 ,l3 are local variables 
  let l1=9;
  const l2="something";
  var l3=true
  console.log(c,k,j);

  

  
  
}

console.log(l3);

foo();


if(true){
   let l1=9;
  const l2="something";
  var l3=true
  
    console.log(c,k,j);

}
//console.log(l1);



for(let i=0;i<10;i++){
   let l1=9;
  const l2="something";
  var l3=true
    console.log(c,k,j);

}


function sumOfArr(arr){

  // this is a global variable of function
 let sum=0; 

  for(let i=0;i<arr.length;i++){
  
    sum=sum+arr[i];
    
  }

  //console.log(i);
  return sum;
  
}
sumOfArr([1,2,3,4]);

//console.log(sum);
*/



//Block scope vs functional scope

// var -->functional scope 
// let and const -->block scope
/*
{
  //scope
}

function foo(){

  // functional scope
  var c=0;
  let k=99;
  const h="hello there";
  
}

//console.log(c,k,h);


if (true){

    // functional scope
  var c=0;
  let k=99;
  const h="hello there";
  

  // anythin other than function --->is known as block scope
  
}

console.log(h);
*/

function bar(){

  var c=9;
  let k=88;
  const j=89;

  if(true){
    var h=88;  // what is the scope of var ? 
    console.log(c,k,j);  // output ??
  }


  console.log(h);  //output ??    error 88

  
}




function bar2(){

  var c=9;
  let k=88;
  const j=89;

if(true){
  var z=88;
    console.log(c,k,j);  // output ??  9,88,89
  
}
  //fg();


  console.log(z);  //output ?? 88
}

 //bar2();

//--->let and const cant be accessed outside their scope ({})
// var cannot be accessed only outside the function scope ,rest it can be accesed

//scope {}
// variable are accesible in and out of the scope --->

let k=88;

function foo2(){

  k=99;

  if(true){

    let k=77;
    console.log(k);//output ? 88  
  }

  console.log(k);  //output   //reference err


  
}
foo2();


//Interview question 


var k=88;

function foo2(){
  var k=55; // error ??

  k=99;

  if(true){

    var k=77;  //  ?? errorr  
    if(true){
      var k="something elsse";
       console.log(k);//output ? 88  
    }
    var k=990;  // this will throw npt throw an error
    console.log(k);//output ? 88  
  }

  console.log(k);  //output   //reference err


  
}
var k=878;
console.log(k);
foo2();





let k=88;

function foo2(){
  let k=55; // error ??

  k=99;

  if(true){

    const k=77;  //  ?? errorr  
    if(true){
      let k="something elsse";
       console.log(k);//output ? 88  
    }
   // let k=990;  // this will throw an error
    console.log(k);//output ? 88  
  }

  console.log(k);  //output   //reference err


  
}

//let k=878;
foo2();


// let and const cant be redeclared inside the same scope


const k=88;

function foo2(){
  const  k=55; // error ??

  

  if(true){

    const k=77;  //  ?? errorr  
    if(true){
      const  k="something elsse";
       console.log(k);//output ? 88  
    }
    //const  k=990;  // this will throw an error
    console.log(k);//output ? 88  
  }

  console.log(k);  //output   //reference err


  
}

//let k=878;
foo2();
