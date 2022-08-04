//conditionals
// if 
// else if 
// else 
let itwillrain=true;
if(itwillrain){
    //logic here
    console.log("I will not go to college");

}
else{
    console.log("I will go to college");

}


function checkWhetherEvenOfNot(num){

    // the even number is completely divisible by 2 

    // that means if I do num %2 -->0

    let reminder=num%2; // num%2 will return a remainder 

    // == equality operator to check whether two values are equal or not 
    // = assignment operator 
    // let c=9;
    if(reminder==0)
    {
        //console.log("its an even number");
        return "even number";
    }
    else{
        //console.log("its an odd number")
        return "odd number";
    }


}


//---questions time functions +if else 

//Write a function that checks whether the number is negative or positive  //use a
// return statement 

// Write a function to chekc whether a number is prime or not 
// Write a function to check whether the number is factor of 11 
//Write a function to check whether the number is factor of 7