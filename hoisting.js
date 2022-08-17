//hoisting is the default behvaiour of js 
// classes ,functions ,variables all undergo hoisting 
// let or const or var --->they all undergo hoisting


//console.log("gives",k);
//const  k=9;
//console.log(k);
/*
foo();

function foo(){
  console.log(99)
}
*//*
function foo()



  foo(){

  //what that function is gonna doing 
  }
*/
/*
//console.log(k);// eroor
function zoo(){
console.log(k);//undefined ,error

  if(true){
    console.log(k);//undefined
    var k=88;
    console.log(k);// 88
  }

  
}
zoo();
*/


/*

function bar(){
  //console.log(k);


  if(true){
    //console.log(k);  ///this line error -->
    let k;  //assignment and initialization will 

    console.log(k);
  }
}
bar();
*/
/*
function foo(){

  // undfined and null are treated as false in js


  if(h){
    console.log(h);  //output  undefined -->
  }else{
    console.log(h);
  }
  var h=9;
}

foo();
*/
/*
console.log(k);

let k=9;
*/

/**
internal represnetation
let z
console.log(z)  // will throw an error 

[

z=undefined
z=9

]

**/


//c(); //output??

/*
const c= ()=>{
  console.log("hello")
  return 9;
}
console.log(c()); //output??
*/

//console.log(parseInt("1"))
const value=parseInt("hello");

if(isNaN(value)){
  console.log("not a number");
}

