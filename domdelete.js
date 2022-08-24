console.log('Hello!');

// Creating dynamice html elements

const btn = document.getElementById('btn');
const input = document.getElementById('input');
const itemslist = document.getElementById('items');

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

const callBtn = (btn) => {

let elementToBeRemovedId=btn.getAttribute("data-parentId");
let elementTobeRemoved=document.getElementById(elementToBeRemovedId)

itemslist.removeChild(elementTobeRemoved);

};

btn.addEventListener('click', function () {
  //creating dynamic list items

  const list = document.createElement('li');
let listID=makeid(5);
list.setAttribute("id",listID)
  list.setAttribute('class', 'list-group-item');
  //list.textContent = input.value;
  list.style.cursor = 'pointer';
 
  // to add a button

  list.innerHTML =
    input.value +
    "<button data-parentId="+listID+"  style='margin-left:50px' onclick='callBtn(this)' class='btn btn-danger'>Delete</button>";

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

  //itemslist.removeChild(event.target); // remove child is used to remove the child from parent element
});
/*
// event delegation on body
document.getElementById('body').addEventListener('click', function () {
  console.log('hello from body');
});
*/
