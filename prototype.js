//Different ways to create an Object --

//Using Object (God Object)  constructor

const obj=new Object();
obj.name="john"
obj["age"]=99
console.log(obj);


// second away 

const obj1={age:23}
console.log(obj1);


// Third away using constructor function -->
// A constructor function is a special type of function 
//used to create an object ,and it doesnt return anything

function Animals(hands,legs){
  this.hands=hands;
  this.legs=legs;

  // this here is representing the object that would be created with this constructor function

  
  
}

const human=new Animals(2,2);
console.log(human);
const cat=new Animals(0,4);
console.log(cat);

// fourth way

// class -->tomorow

// fifth way 
/// Object.create()
// its actually a way to do inheritance in JS 





-----const obj={
  getHelloWorld:function(){
    console.log("hello world")
;    
  },

  getGoodMorning:function(language){

    if(language=="spanish"){
          console.log("spanish good morning guys")
    }
    else if (language=="hindi"){
                console.log("shubh prabhat")

    }

;    
  },


}

const myobj=Object.create(obj);

myobj.getGoodMorning("spanish");
  
  
