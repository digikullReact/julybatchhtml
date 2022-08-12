/*function countNumbers(number){

  let convertStr=number.toString();
  return convertStr.length;
  
}

console.log(countNumbers(234))
*/




//Calculate the number of digits in a number
function countDigits(num){
  let digitCounter=0;
  let sum=0;

  while(num>0){


    digitCounter++;


 
    num=Math.floor(num/10);


   // console.log(num);
    
  
    
    
  }
  
  return digitCounter ;
  
}

//Calculate the sum of digits;

function sumOfDigits(num){
  let sum=0;
  while(num>0){
    let digit=num%10;
    console.log("Reminder--",digit);
       num=Math.floor(num/10);
    console.log("Quotient---",num);
      sum=sum+digit;

    
  }
  return sum;
}

console.log(sumOfDigits(7877));



//78.9  --->Math.ceil  --->bigger whole number  79

//78.9 -->Math.floor --> lesser whole number   78
//console.log(Math.round(78.4));

//console.log(Math.abs(-9));

//2 -->4 

//Programming basics with JS as a lnaguages
//Language basics of js 

function squareOfNum(num){
  let sumOfSquares=0;
  let sum=0;

  for(let i=1;i<=num;i++){
    sumOfSquares=sumOfSquares+(i*i);
    sum=sum+i;

    
    
  }

  sum=sum*sum;

  return [sum,sumOfSquares];

  
}

console.log(squareOfNum(100))
