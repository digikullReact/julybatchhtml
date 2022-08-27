//classes in js --
// class is just a syntactical sugar

function Animals(legs,hands){
  this.legs=legs;
  this.hands=hands;
  
}

Animals.prototype.greeting=function(){
  console.log("hhuu")
}

let cat=new Animals(4,0);
var Arnab=new Animals(2,2);

//console.log(cat,Arnab);
console.log(cat.__proto__===Animals.prototype)
Arnab.greeting();

class Animal{

  constructor(legs,hands){
      this.legs=legs;
  this.hands=hands;
  }

  greet2(){
    console.log("hhiii")
  }

  
}

console.log(Animal.prototype);

let cat2=new Animal(4,0);
var Arnab2=new Animal(2,2);
//console.log(cat2,Arnab2);

console.log(cat2.__proto__===Animal.prototype)

cat2.greet2();
