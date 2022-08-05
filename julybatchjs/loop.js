
// repetitive 
// we need some kind of tool that does that job for us  repetitvely 
// that's where the programmers introduced something called loop 

for(let i=0;i<=10;i=i+1){
   //console.log(i);
}

function sum(a,b){
    let total=a+b;
    return total;

}
// i++ == i=i+1;

for(let i=0;i<15;i=i+1){
   // let total=sum(3,4);
    //console.log("hello");
    //console.log(total);

}

//Write a progaram to print first 10 natural numbers;
//Write a program to print the sum of first 10  number
//Write a programm to print the square of first 10 numbers 
//Write a program to print all the odd numbers between 1-100 (for loop and if else)

//Write a progaram to print first 10 natural numbers;

function printFirsttenNaturalNumber(){
   for(let i=0;i<10;i++)
{
    console.log(i);
}    

}

//Write a program to print the sum of first 10  number

function printSumOfFirsttenNaturalNumber(){
    let sum=0;  //we want to decklare it only once 
    for(let i=1;i<10;i++)
 {
    console.log(sum);
    sum=sum+i;  
   
 }    
 
 console.log("final sum",sum);
 }

 function squareOfFirstTen(){

    for(let i=1;i<=10;i++){
        console.log(i*i);

    }

 }
 squareOfFirstTen();

 //printSumOfFirsttenNaturalNumber();

 //Write a program to print all the odd numbers between 1-100 (for loop and if else)
 function printOddNumber(){

    for(let i=1;i<100;i++){
       if(i%2!=0){  // ! -->not operator 
       console.log("its odd",i);
       }
       /*
       else{
        console.log("its odd");
       }*/


    }

 }

 printOddNumber();