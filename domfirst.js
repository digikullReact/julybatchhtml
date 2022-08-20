//id selectors
// specifically for selecting single elements
//to get the elements on the basis of id

const element = document.getElementById('heading');
console.log(element.style);

//element.style = 'color:red;background:pink';

//// html  and text manipulations

//class selectors

//tag selectors

let btn = document.getElementById('btn');
console.log(btn);
let a = function action() {
  console.log('helllo');
  //alert('hhhh');

  // element.textContent = 'jjj';
  //  element.innerText = 'ding dong';
  element.innerHTML = '<span>78888</span>';

  // change
  element.style = 'color:red;background:pink';
};

btn.addEventListener('click', a);
