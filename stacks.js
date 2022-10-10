class Stack{

constructor(size){
  this.items=[];
  this.count=0;
  this.size=size;
  
}

  

  // push 
  // Add data to the top of stack

  push(data){

    if(this.count<this.size){
        this.items[this.count]=data;
    this.count++;

    return this.count;
    }
    else{
      throw new Error("Stack OverFlow Error")
    }
    
  
    
  }


  // pop
  // pop returns the top element and removes it as well from 
  // the stack 
  pop(){
   let deletedItem=this.items[this.count-1];
   delete  this.items[this.count-1];

    this.count--;

    return deletedItem;
  }

  
// peek 

  // just returns the top most element it doesnt delete it --->

  peek(){
   let deletedItem=this.items[this.count-1];


return deletedItem;
  }

// size
  size(){
    return this.count;
  }

  //isEmpty
  isEmpty(){
    if(this.count==0){
      return true;
    }

    return false;
  }
  
}

const stack=new Stack(5);

stack.push(9);
stack.push(90);
stack.push(99);
stack.push(990);
stack.push(999);
stack.push(99888);



console.log(stack.pop());

console.log(stack.peek());  // what it will return 
