//Accessing Parent attributes from child objects
const grandParent={
  land:"2 acres land"
}


const father=Object.create(grandParent);

father.land="4 acres land";

//console.log(father.land) //??
//console.log(father.__proto__.land);

const child =Object.create(father);
child.land="7 acres land";

//console.log(child.prototype);

//console.log(child.land);
//console.log(child.__proto__.__proto__.land);// ??

//prototype --->
//__proto__


// prototype property always exists with constructors;

// __proto__ exists with every object


function Animals(legs,hands){
  this.legs=legs;
  this.hands=hands;
  
}

let cat=new Animals(4,0);
var Arnab=new Animals(2,2);

//console.log(Animals.prototype);
//console.log(cat.__proto__)
//console.log(cat.__proto__===Animals.prototype)

Animals.prototype.greet=function(){
  console.log("good morining");
}
Arnab.__proto__.greet2=function(){
    console.log("good evening");
}


cat.greet();
cat.greet2();
