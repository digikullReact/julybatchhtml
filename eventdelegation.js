console.log('Hello!');

// Creating dynamice html elements

const btn = document.getElementById('btn');
const input = document.getElementById('input');
const itemslist = document.getElementById('items');

btn.addEventListener('click', function () {
  //creating dynamic list items

  const list = document.createElement('li');
  list.setAttribute('class', 'list-group-item');
  //list.textContent = input.value;
  list.style.cursor = 'pointer';
  // to add a button

  list.innerHTML =
    input.value + " <button class='btn btn-danger'>Delete</button>";

  itemslist.appendChild(list); // appenchild adds a new html element at the end of element
  input.value = '';
});

// event delegation on ul
itemslist.addEventListener('click', function cb(event) {
  //  console.log(ashwini);
  //function parameter is the venet object that is created when you clicked the item
  // event.target is the exact element where the click is happened
  //event.target.style.textDecoration = 'line-through';
  //event.target.textContent = 'Ding dong';
  //event.target.style.color = 'red';

  itemslist.removeChild(event.target); // remove child is used to remove the child from parent element
});
/*
// event delegation on body
document.getElementById('body').addEventListener('click', function () {
  console.log('hello from body');
});
*/
