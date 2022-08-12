//Case of Let

//let variable="hello";
// variable=97; //possible
//let variable =99;  // not possible at all
//variable=8;
//console.log(variable);

// Case of var

//var t=9;
// t=77; //possible
//var t=99;  //possible

//Difference between let and var -->let cannot be redeclared 
// but var can be -->



//Case of const -->
//const c=9;
//c=99;  // not possible 
//const c=88; // total not possible
//console.log(c);
// For const  you cant redeclare and you cant re assign 


//There are two different datatypes 
//Primitive Data types
// They are already the part of language 

//number
//string
//boolean
// undefined
// null
// symbol
// bigInt


let k=9; // number   //64 bits are 8 byte
let c="hello"; // string   // 32 bits 4 bytes.

let j=true; // boolean (true and false)  // 32 bits 4 bytes.
let h=undefined; //undefined
let i=null ; // null 
//let symb=new Symbol();

// User Defined Data types 
//Array 
//Object literal   // {name:"Johnny",age:"78"}; // hashmap
// Set
// Map()

//let array=[1,2,3,[7,8]];
//let obj={name:"johnny",city:["Kanpur","Lucknow"] ,address:{pincode:"2090900"}};

//[1,2,3 ,[5,6] ]
//const ck=[1,2,3 ,[5,6,[3,4]] ];
//console.log(ck[3][2][0]);


// let and const -->es6

//Arrow function   -->es6 -->


//es5 function
function foo(){

  return 9;
  
}

//es -->ecmascript
//const kj=foo();

//console.log(kj);

//es6 function or arrow functions
/*
var arrowfunction=(name,value)=>{
  console.log(name,value);

  return 99;
  
}
*/
//var ju=arrowfunction(99,"jjj");
//console.log(ju);

//const shorterArrow=()=>9;
//console.log(shorterArrow());

//Valid
let addTwoNo = (n)=>45

addTwoNo =(n) =>{
return 23
}

console.log(addTwoNo());
