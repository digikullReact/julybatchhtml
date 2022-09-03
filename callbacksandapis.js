function callApi(cb) {
  $.ajax({
    method: 'GET',
    url: 'https://fakestoreapi.com/products/',
    success: function (result) {
      cb(result);
      //console.log(result);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

const btn = document.getElementById('click');
const ul = document.getElementById('ul');
let data2 = [];

btn.addEventListener('click', function () {
  console.log(1);

  setTimeout(function () {
    console.log('3 from settimeout');
  }, 5000);

  callApi(function (data) {
    // asynchronous-->
    console.log(data);
    // data2.push(...data); // array
    console.log(3);
    const t0 = performance.now();
    for (let i = 0; i < 1000; i++) {
      console.log(i);
    }
    const t1 = performance.now();
    console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

    setTimeout(() => {
      console.log('hii from settimeout');
    }, 1000);
  });

  console.log(2);
  console.log(data2); //[] //// What it will print
  console.log(4);
  //functio. call
});



//What is a callback ?
// A callback is a function passed as an argument to another function ->

// Now callbacks can be used in two different ways
// Synchronous way

/*
setTimeout(()=>{
  console.log("I am asynchronous");
},1000)
console.log("hii");

let arr=[1,2,3];


arr.forEach(function (ele){
  console.log(ele);
})
console.log("hii 2");
setTimeout(()=>{
  console.log("I am asynchronous as well");
},1000)
*/


// Asynchronous way
