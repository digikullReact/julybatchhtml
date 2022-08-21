const btn = document.getElementById('btn');
const input = document.getElementById('input');
const drop = document.getElementById('drop');
const main = document.getElementById('main');
const main2 = document.getElementById('main2');

btn.addEventListener('click', function () {
  const value = input.value;
  //document.createElement(""). // for creating new element
  const element = document.createElement('li');

  element.innerHTML = value + ' <button>Delete Todo</button>';

  //appendChild method whoch appends the element at the last of the element

  main.appendChild(element);
  input.value = '';
});

drop.addEventListener('click', function () {
  const value = input.value;
  //document.createElement(""). // for creating new element
  const element = document.createElement('select');
  //element.setAttribute('multiple', 'true');

  //click ,change ,scroll ,mouseover ,keypress ,keydown ,keyup
  element.addEventListener('change', function (event) {
    console.log('Change event fired', event.target.value);
  });

  element.addEventListener('click', function (event) {
    console.log('Click event fired', event.target.value);
  });

  const arr = ['India', 'Bhutan', 'Nepal', 'USA', 'Russia'];

  for (let i = 0; i < arr.length; i++) {
    const option = document.createElement('option');
    option.innerText = arr[i];

    option.value = arr[i];

    element.appendChild(option);
  }

  main2.appendChild(element);
});
