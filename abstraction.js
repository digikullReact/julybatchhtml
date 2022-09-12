//oops -->object oreiented programming system
//inheritance --->re usability -->
// abstraction
//polymorphism

class Restaurant{
  #kitchen_chickentikka="Goodfood";
  #kitchen_paneerlababdar="Good food";

  getThroughWaiter(){
    return this.#kitchen_chickentikka
  }

  
  

  
}

const tajrestaurant=new Restaurant();
console.log(tajrestaurant.getThroughWaiter());
//console.log(tajrestaurant.#kitchen_chickentikka)
