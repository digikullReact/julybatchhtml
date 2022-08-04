//function with return statements
// every function returns something
// function definition  
function foo(a,b){
    let sum=a+b;
  //  console.log(sum);
    return  sum;  // every function has a return statment // when return statement is called
    // function execution stops 
    //
    // returning of value is important if you want to use functions output outside it

}

//function call
//console.log(foo(2,3)); //arguments
//let sumofNum=foo(5,8);
//console.log(2*sumofNum);


function plate(blocka,blockb,blockc,blockd){
    //logic 

}


plate("dal","curry","rasogulla","chappatis");


//create a function that calculates the simple interest of a giveamount ,rate and timn
//return the simple interest -->

//Create a function that calculates the sum of n natural numbers ()
// return the sum;





function simpleInterestCalculate(p,r,t){
    let si=(p*r*t)/100;
   return si;  //so if you are not mentioning the return statement js will put its hiddnen return statetment and will return undefined



}

/*


console.log("functions----------------------");

let  s1=simpleInterestCalculate(1000,10,1);// function call
console.log(s1);

let  s2=simpleInterestCalculate(4000,13,2);
console.log(s2);
*/

function calculateSumOfnNumbers(n){

    let sumofNumbers= (n*(n+1))/2;

    return sumofNumbers;

}

console.log(calculateSumOfnNumbers(5));

// prompt method is used to take the response from user
let principal=prompt("enter the Principal  amount");
let rate=prompt("enter the rate  ");
let time=prompt("enter the time ");

let siFinal=simpleInterestCalculate(principal,rate,time);
console.log("si final-----",siFinal); // actually prints in the broswer console
alert(siFinal);