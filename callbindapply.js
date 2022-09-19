//this keyword can have two values -->
// globalObject 
// the object to which the function is bound too

// this keyword refers to the value of either the global object (for browser its window) or the object to which the function 
// is bound too

function foo(){

function bar(){

  function bar2(){
    console.log("Value inside bar2",this)
  }
console.log("Value inside bar",this)
bar2()
}
console.log("Value inside foo",this)

bar();
}

//foo();

let obj={
  name:"shubham",
  fn:function(){
    console.log(this.name)
  }
}

let obj2={
  name:"sunil",
  fn:function(){
    console.log(this)
  },
  df:{
    name:"Akash",
    fn2:function(){
          console.log(this.name)
    }
  }
}

//obj.fn()
//obj2.fn()
//obj2.df.fn2();
//console.log(obj.name);
// call bind and apply --->. do the same job that they change the value of this for a function

let obj3={
  name:"Rajkumar"
}

function rk(a,b,c){
  console.log(a,b,c)
  console.log("the value of this ",this);  // by default window object --->
} //rk()

//rk();


// bind method
let fn=rk.bind(obj3);
rk.call(obj3,5,6,7)
rk.apply(obj3,[5,6,7])
//fn()




