//closure---->
var k=9;
let h=88;
function bar(){
    debugger;
  bar2();
  
 debugger;
  return "alpha";
   
  
}


function bar2(){
  var c=9;
  let k=9;
  const h=88;
    debugger;
  return "omega";
}
function foo(){
  debugger;
  bar();
  debugger;

  return"beta";
  
}
///

function foo(){
var c=9;
  let k=88;
  const j=77;

  debugger;

  return function name  (){
    

    

    debugger;

    return [c,k,j];  // it should print ?
     
  }


  
}

console.log(foo()()) // what it will return 

//const fn=foo();
//const k=fn();
//console.log(foo()());


// Extra topics  

//utility methods --->
//rest paramater 
// spread operator 
// tagged template literals 
// closures
// sort --->

//variadic functions-->

// variadic --->they can take n number of arguments

function foo(a,b,c,d,e,f,g,h,i,j,k,l,m,n){
 console.log(a,b,c,d,e,f,g,h,i,j,k,l,m,n) 
}

// variadic function 
function foo2(...args){ //rest operator is always with the function
 for(let i=0;i<args.length;i++){
 //  console.log(args[i]);
 }
  
}

foo2(2,3,3,47,89,11,2,89,08,1);
//
// spread operator --->
let arr2=[1,2,3,4,5,8];
{
  let str="Arnab";
  let obj={};
for(let i=0;i<str.length;i++){
  obj[i]=str[i]
  
}
}


//console.log(...arr);
//console.log([...str]);
//console.log({...str});
//console.log(obj);
/*
function bar(a,b,...args){
 console.log(args,a,b); 
}

bar(2,3,4,7,8,9)
*/
function bar(a,...args){  //rest syntax
  console.log(args);

  if(a==0){
    return a;
    
  }
  return bar(a-1,...args)  // spread syntax
  
}
//console.log(...arr)
//console.log(bar(7,8))

function sum(...args){
console.log(args[2]+args[3]);
  return args.reduce((acc,ele)=>acc+ele);
}

function sum2(a,b,c,d,e,f,g,h){

  return a+b+c+d+e+f+g+h;
}

//console.log(sum(2,3,43,4,4,5,558,99));
//console.log(sum2(2,3,43,4,4,5,558,99));


let arr=["arnab","71","WB","22","180"];

// My name is arnab and I got 71 percent in my engg and I belong to WB and I am of 22 years old and my height is 180cm
let str="My name is "+arr[0]+" and I got "+arr[1]+"percent marks";

function taggedFunc(staticString,...dynamicstring){
  
  staticString=staticString.map(ele=>ele.toUpperCase())
    dynamicstring=dynamicstring.map(ele=>ele.toLowerCase())

  
  return staticString.join(",")+dynamicstring.join(",");
}
""
''
``
let str2=taggedFunc `My name "is" ${arr[0]} and I got ${arr[1]} percent in my engg and I belong to ${arr[2]} and I am of ${arr[3]} years old and my height is ${arr[4]} cm`


console.log(str2);
 

 // console.log(str2);

  


//console.log(str);

