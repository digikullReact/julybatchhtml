class Animal{

  hand=2;  //private ,you cant access them directly (the fields starting with # are private fields)
  #leg;
  tail=0;
  

  constructor(hand,leg,tail){
    this.hand=hand;
    this.#leg=leg;
    this.tail=tail;
    
  }

  getHand(){
    return this.hand;
  }
 
  
}

const animal=new Animal(2,3,1);
console.log(animal.#tail);
//console.log(animal.getClass());
//console.log(Animal.name)




class GrandParent{
  constructor(land ,home){
    this.land=land;
    this.home=home;
    
  }

  getLand(){
    console.log("Grandfather object");
  }

  
}

//const grandfather=new GrandParent(2,3);

//const father=Object.create(grandfather);
/*
father.getLand=function(){
  console.log("fathers land")
}
*/
//father.getLand();

//const grandfather2=new GrandParent(20,30);
//console.log(grandfather,grandfather2)

class Father extends GrandParent{

    constructor(land,home){
      super(land,home); // will create the Grandparent object internall for every contructor call of Father
      // super just calls the parent class constructor
   
  }

    getLand(){
    console.log("Father Object");
  }
  
}

//const gp=new GrandParent(); // always

class Child extends Father{

    constructor(land,home){
      super(land,home); // will create the Grandparent object internall for every contructor call of Father
      // super just calls the parent class constructor
   
  }

    getLand(){
    console.log("Father Object");
  }
  
}


const father_=new Father();
console.log(father_.getLand());



//classes and inheritance 
//constructor function 
/*
function Animal(legs,hands){
  this.legs=legs;
  this.hands=hands;
  
}


const human=new Animal(2,2);
console.log(human);


*/

class Animal{
  constructor(legs,hands){
  this.legs=legs;
  this.hands=hands;
  
}

  getHands(){
    return "hola";
  }
  
}

//const human=new Animal(2,2);
//console.log(human);

class Birds extends Animal{
   constructor(){
    // super();
  
  
}

   getHands(){
    return "hello there";
  }

  }

 
  


class Penguin extends Birds{
   constructor(){
     super();
  
  
}
  
  
}

const bird=new Penguin();
console.log(bird.getHands());
