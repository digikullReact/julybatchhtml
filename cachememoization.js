// memoization example

let obj = {};

function findItemsFromArray(id) {
  let arr = [
    {
      _id: '632871a3ecd2ffe0ec81623e',
      age: 43,
      name: 'Oconnor Moody',
      address: '270 Moore Place, Malott, North Carolina, 7429',
    },
    {
      _id: '632871a3f31fc8411959cf4f',
      age: 30,
      name: 'Earnestine Barrett',
      address: '991 National Drive, Starks, Marshall Islands, 1136',
    },
    {
      _id: '632871a347958a5ed598b643',
      age: 68,
      name: 'Brandie George',
      address: '354 Gilmore Court, Reinerton, Michigan, 6841',
    },
    {
      _id: '632871a37c3ecd3a9f318ba8',
      age: 85,
      name: 'Tate Garrett',
      address: '609 Wolcott Street, Vowinckel, Indiana, 9859',
    },
    {
      _id: '632871a3e147bfd0fbf2b6f9',
      age: 99,
      name: 'Valerie Mathews',
      address: '933 McClancy Place, Kylertown, Ohio, 705',
    },
    {
      _id: '632871a3440fdefd6e94834e',
      age: 75,
      name: 'Daugherty Kerr',
      address: '660 Essex Street, Oceola, Arizona, 6610',
    },
    {
      _id: '632871a3d6079faa50c0e9dd',
      age: 95,
      name: 'Gregory Snider',
      address: '466 Winthrop Street, Marysville, Louisiana, 6661',
    },
    {
      _id: '632871a301a8d7619937e059',
      age: 11,
      name: 'Belinda Rivera',
      address: '180 Conklin Avenue, Northridge, Kentucky, 2673',
    },
    {
      _id: '632871a3801e570045cafa14',
      age: 31,
      name: 'Graham Conrad',
      address: '435 Bartlett Place, Dragoon, Alabama, 4895',
    },
  ];

  console.log(obj);
  if (obj[id]) {
    console.log('Cache hit');
    return obj[id]; // O(1);
  }
  let findId = arr.find((ele) => ele._id == id); // O(N);
  obj[id] = findId;

  //console.log('No  hit');
  return findId;
}

document.getElementById('button').addEventListener('click', function () {
  const id = document.getElementById('input').value;

  findItemsFromArray(id);
});
