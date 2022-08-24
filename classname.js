//document.getElementsByClassName
// document.getElementById()

const elements = document.getElementsByClassName('heading');
const element = document.getElementById('heading');
/*
[...elements].forEach((ele) => {
  console.log(ele);
});
/*
const properties = {
  color: 'green',
  fontFamily: 'Verdana',
  fontSize: '12px',
};

for (let i = 0; i < elements.length; i++) {
  for (let prop in properties) {
    elements[i].style[prop] = properties[prop];
  }
  // elements[i].style.fontFamily = 'red';
  //elements[i].textContent = 'dodo';
}

/*
const elem = document.getElementsByTagName('h1');

for (let i = 0; i < elem.length; i++) {
  elem[i].style.color = 'green';
}*/

//querySelector (returns single element) and querySelectorAll
//(returns multiple element);

//with quertySelector you can select classes ids and tags

//document.querySelector('.heading').style.color = 'magenta';
//document.querySelector('#heading').style.color = 'brown';

//document.querySelector('h2').style.color = 'pink';
/*
const allElements = document.querySelectorAll('.heading');

allElements[0].style.color = 'red';
//console.log(allElements);
/*
for (let i = 0; i < allElements.length; i++) {
  allElements[i].style.color = 'red';
}
*/
/*
allElements.forEach((ele) => {
  console.log(ele);
});
*/
