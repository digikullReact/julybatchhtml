class Stack{

constructor(){
  this.items=[];
  this.count=0;
  
}

  

  // push 
  // Add data to the top of stack

  push(data){
    this.items[this.count]=data;
    this.count++;

    return this.count;
    
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

  //isEmpty
  
}

const stack=new Stack();

stack.push(9);
stack.push(90);
stack.push(99);


console.log(stack.pop());

console.log(stack.peek());  // what it will return 
