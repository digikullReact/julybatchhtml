/// hash function that returns a hash 
//


class Hashtable{
  constructor(size=50){
    this.keyMap=new Array(size);
    
  }

  _hash(key){
   let hash=  key.charCodeAt(0)*89
   return hash;
    
  }

  get(key){

    // we will call the hash meth
       let index=this._hash(key);
     return     this.keyMap[index];
  }

  set(key ,value){

    // first lets call the hash method to get the index on which we will store the value
    let index=this._hash(key);
    this.keyMap[index]=value;
    


    
    
  }
}

const hashtable=new Hashtable();

hashtable.set("name","shubham");
hashtable.set("profession","dev");

console.log(hashtable.get("name"));
console.log(hashtable.get("profession"));
