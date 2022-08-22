const button = document.getElementById('btn');

const input = document.getElementById('input');
const ul = document.getElementById('items');

button.addEventListener('click', function () {
  let search = input.value;
  fetch('https://www.googleapis.com/books/v1/volumes?q=' + search)
    .then((response) => response.json())
    .then((data) => {
      // generating dynamic elments
      let arrayOfBooks = data.items;
      ul.innerHTML = '';

      arrayOfBooks.forEach(function (ele) {
        const li = document.createElement('li');
        const thumbnailimage = document.createElement('img');

        thumbnailimage.setAttribute(
          'src',
          ele.volumeInfo.imageLinks?.thumbnail
        );
        thumbnailimage.style.width = '100px';
        thumbnailimage.style.height = '100px';

        li.setAttribute('class', 'list-group-item');
        li.textContent = ele.volumeInfo.title;
        li.appendChild(thumbnailimage);
        ul.appendChild(li);

        console.log(ele.volumeInfo.imageLinks?.thumbnail);
      });
    });
});
