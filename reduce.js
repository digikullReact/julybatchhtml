// reduce

// 
let arr=[1,2,3,4,5,6];

let sum=0;

for(let i=0;i<arr.length;i++){
//  sum=sum+arr[i];
  sum+=arr[i];
  
}

console.log(sum);


const sum2=arr.reduce(function(acc,ele){
  return acc+=ele;
  
},0);

//const sum3=arr.reduce((acc,ele)=>acc+=ele);
//console.log(sum3);
//console.log(sum2);


//two sum ---> 
// 78
const arr2=[1,44,77,89,2,9,11];
/*
const obj={};

for(let i=0;i<arr2.length;i++){
  obj[arr2[i]]=i;
  
}
console.log(obj)

*/

const obj2=arr2.reduce(function(acc,ele,i){

  acc[ele]=i;
  return acc;
  
},{})

console.log(obj2);


const arr3=[1,23,4,5,6,7,87];
let numGr=[];
for(let i=0;i<arr3.length;i++){

  if(arr3[i]>4){
    numGr.push(arr3[i]);
    
  }
  
}

console.log(arr3.reduce(function(acc,ele){
   if(ele>4){
    acc.push(ele);
    
  }

  return acc;
},[]))


//--->  Homeowrk ---->   
const objarr=[
  {
    "_id": "631f410df05fc240b46721dc",
    "age": 93,
    "name": "Lessie Horton",
    "address": "638 Java Street, Geyserville, Ohio, 2535"
  },
  {
    "_id": "631f410d43ee8c20abf14e5c",
    "age": 85,
    "name": "Delaney Merritt",
    "address": "871 Florence Avenue, Cutter, Hawaii, 3674"
  },
  {
    "_id": "631f410d1b81c5239755078d",
    "age": 40,
    "name": "Vega Buck",
    "address": "652 Applegate Court, Odessa, Wisconsin, 7569"
  },
  {
    "_id": "631f410dac986f12dad5a071",
    "age": 51,
    "name": "York Mckenzie",
    "address": "633 Madeline Court, Barclay, Federated States Of Micronesia, 354"
  },
  {
    "_id": "631f410d36be2a8fbd9bffac",
    "age": 92,
    "name": "Downs King",
    "address": "553 Alton Place, Darbydale, Virgin Islands, 4747"
  }
]
// You have to use the reduce method ---->
// Calculate the sum of all the ages of object
// you have to get all the names of the elements 
// you have to get all the address of the elements
//Single object returned----> { ageSum:89,addreess:["553 Alton Place, Darbydale, Virgin Islands, 4747","633 Madeline Court, Barclay, Federated States Of Micronesia, 354"],names:["Downs King","York Mckenzie"],  }
