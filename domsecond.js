//How to create dynamic elements and append them
// calculator

const btn = document.getElementById('add');
const heading = document.getElementById('heading');
const firstInput = document.getElementById('first');
const secondInput = document.getElementById('second');
const inputShow = document.getElementById('show');
//btn.innerHTML = '<h1>Something</h1>';

btn.addEventListener('click', function () {
  //getting the values of input
  // heading.textContent = '';  //clearing the text from the element
  //heading.innerHTML="hello"
  const firstValue = firstInput.value;
  const secondValue = secondInput.value;
  //console.log(typeof firstValue);
  //you can use innerHtml inplace of innerText but its recommended to use innerHTML only for adding html elements and innerText is used for adding the text value

  const sum = Number(secondValue) + Number(firstValue);
  console.log(sum);
  heading.innerText = sum;
  inputShow.value = sum;
});
// document.getElementById('show').innerHTML=show;


const btn = document.getElementById('add');
const input = document.getElementById('input');
const heading = document.getElementById('heading');
const clear = document.getElementById('clear');
/*
let firstValue = 0;
let secondValue = 0;
btn.addEventListener('click', () => {
  const value = input.value;

  if (firstValue == 0) {
    firstValue = value;
  } else {
    secondValue = value;
  }

  heading.innerText = Number(firstValue) + Number(secondValue);
  input.value = '';
});
*/
/*

btn.addEventListener('click', () => {
  const initialValue = heading.textContent;
  const value = input.value;
  heading.innerText = Number(initialValue) + Number(value);
  input.value = '';
});

clear.addEventListener('click', () => {
  heading.innerText = 0;
  input.value = '';
});
*/

const btnvalue = document.getElementById('btnvalue');

const one = document.getElementById('one');

one.addEventListener('click', function () {
  const num = one.textContent;

  btnvalue.value = num;
});



const btn = document.getElementById('add');
const input = document.getElementById('input');
const heading = document.getElementById('heading');
const clear = document.getElementById('clear');

btn.addEventListener('click', () => {
  const initialValue = heading.textContent;
  const value = input.value;
  heading.innerText = Number(initialValue) + Number(value);
  input.value = '';
});

clear.addEventListener('click', () => {
  heading.innerText = 0;
  input.value = '';
});



