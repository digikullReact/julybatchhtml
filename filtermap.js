//Repalce string in an array

const stringArr= ["abcd","efgc","pqrc"];



//console.log(stringArr.map(ele=>{
 // return ele.replace("c",77)
  
//}))


// /// Given an array ,["John","Bipasha","Sameer","Sweta"] you have to make first letter as Capital of
let firstC= ["john","bipasha","sameer","sweta"];

console.log(firstC.map(ele=>{
 // console.log(ele.slice(1));
return ele.charAt(0).toUpperCase()+ele.slice(1);
  
}))

console.log(firstC)


//////////


const arrayofjson=[
  {
    "_id": "631c32b35b75bfdee1d61780",
    "age": 47,
    "name": "Girish",
    "address": "269 Balfour Place, Maplewood, Utah, 7153"
  },
  {
    "_id": "631c32b3e1008421f14356fa",
    "age": 77,
    "name": "Sears Morton",
    "address": "267 Bush Street, Innsbrook, Palau, 9487"
  },
  {
    "_id": "631c32b3939c9dfbfa24a585",
    "age": 24,
    "name": "Marlene Glenn",
    "address": "701 Fleet Street, Terlingua, Montana, 2260"
  },
  {
    "_id": "631c32b351559667ecc47fc7",
    "age": 24,
    "name": "Dee Myers",
    "address": "416 Ainslie Street, Woodlands, Missouri, 2089"
  },
  {
    "_id": "631c32b30859aa8f313c9ea1",
    "age": 28,
    "name": "Lee Reid",
    "address": "627 Sullivan Street, Orovada, Guam, 9908"
  },
  {
    "_id": "631c32b3547bdf0420b682f3",
    "age": 11,
    "name": "Justice Gibbs",
    "address": "315 Leonard Street, Bennett, Iowa, 505"
  },
  {
    "_id": "631c32b3ca05bc00df23a791",
    "age": 45,
    "name": "Ginger Alford",
    "address": "811 Ditmas Avenue, Johnsonburg, Oregon, 9945"
  },
  {
    "_id": "631c32b3bebe75817e2bbea0",
    "age": 61,
    "name": "Lynn Wooten",
    "address": "998 Holt Court, Churchill, Mississippi, 2821"
  }
]

const ret=arrayofjson.find(ele=>{
  if(ele.name=="Girish"){
 
     return ele;
  }
  
 
})

console.log(ret._id)







//filter -->
// its is used to filter /extract the data fro existing array depending on some condition
// it can return the array which has length less than or equla to the original array 

const arrayofjson=[
  {
    "_id": "631c32b35b75bfdee1d61780",
    "age": 47,
    "name": "Brandie Lamb",
    "address": "269 Balfour Place, Maplewood, Utah, 7153"
  },
  {
    "_id": "631c32b3e1008421f14356fa",
    "age": 77,
    "name": "Sears Morton",
    "address": "267 Bush Street, Innsbrook, Palau, 9487"
  },
  {
    "_id": "631c32b3939c9dfbfa24a585",
    "age": 24,
    "name": "Marlene Glenn",
    "address": "701 Fleet Street, Terlingua, Montana, 2260"
  },
  {
    "_id": "631c32b351559667ecc47fc7",
    "age": 24,
    "name": "Dee Myers",
    "address": "416 Ainslie Street, Woodlands, Missouri, 2089"
  },
  {
    "_id": "631c32b30859aa8f313c9ea1",
    "age": 28,
    "name": "Lee Reid",
    "address": "627 Sullivan Street, Orovada, Guam, 9908"
  },
  {
    "_id": "631c32b3547bdf0420b682f3",
    "age": 11,
    "name": "Justice Gibbs",
    "address": "315 Leonard Street, Bennett, Iowa, 505"
  },
  {
    "_id": "631c32b3ca05bc00df23a791",
    "age": 45,
    "name": "Ginger Alford",
    "address": "811 Ditmas Avenue, Johnsonburg, Oregon, 9945"
  },
  {
    "_id": "631c32b3bebe75817e2bbea0",
    "age": 61,
    "name": "Lynn Wooten",
    "address": "998 Holt Court, Churchill, Mississippi, 2821"
  }
]


const filteredAge=arrayofjson.filter(function(ele){
  return ele.age>1;
})

console.log(filteredAge)

console.log(arrayofjson.filter(function(ele){
  return ele.name.startsWith("Z");
}))


const arrr= [1,2,3,4,57,88];
// get the elements which are divisible by2



let arrof2=[];

for(let i=0;i<arrr.length;i++){
  if(arrr[i]%2==0){
    arrof2.push(arrr[i]);
    
  }
  
}

console.log(arrof2)

console.log(arrr.filter(ele=>{
  return ele%2==0;
}));





// map will always return the array which has the length equals to input array
const arr=[1,2,3,4,5];
// map method has the inbuilt for loop
const arr1=arr.map(function(ele){
  return Math.pow(ele,2);
  
})

//console.log(arr1);

const arrayofjson=[
  {
    "_id": "631c32b35b75bfdee1d61780",
    "age": 47,
    "name": "Brandie Lamb",
    "address": "269 Balfour Place, Maplewood, Utah, 7153"
  },
  {
    "_id": "631c32b3e1008421f14356fa",
    "age": 77,
    "name": "Sears Morton",
    "address": "267 Bush Street, Innsbrook, Palau, 9487"
  },
  {
    "_id": "631c32b3939c9dfbfa24a585",
    "age": 24,
    "name": "Marlene Glenn",
    "address": "701 Fleet Street, Terlingua, Montana, 2260"
  },
  {
    "_id": "631c32b351559667ecc47fc7",
    "age": 24,
    "name": "Dee Myers",
    "address": "416 Ainslie Street, Woodlands, Missouri, 2089"
  },
  {
    "_id": "631c32b30859aa8f313c9ea1",
    "age": 28,
    "name": "Lee Reid",
    "address": "627 Sullivan Street, Orovada, Guam, 9908"
  },
  {
    "_id": "631c32b3547bdf0420b682f3",
    "age": 11,
    "name": "Justice Gibbs",
    "address": "315 Leonard Street, Bennett, Iowa, 505"
  },
  {
    "_id": "631c32b3ca05bc00df23a791",
    "age": 45,
    "name": "Ginger Alford",
    "address": "811 Ditmas Avenue, Johnsonburg, Oregon, 9945"
  },
  {
    "_id": "631c32b3bebe75817e2bbea0",
    "age": 61,
    "name": "Lynn Wooten",
    "address": "998 Holt Court, Churchill, Mississippi, 2821"
  }
]

const ageArray=arrayofjson.map(function(ele){

 return {age:ele.age};

  
})

console.log(ageArray); //[45,61];

let af=[];
for(let i=0;i<ageArray.length;i++){
  af.push(ageArray[i].age);
  
}
console.log(af);
//console.log(ageArray); //[45,61];

///////-------
const arr=[1,2,32,89];
//console.log(...arr);

//Higher order Array functions--->
//forEach 
// map 
// filter
//reduce
//find 
//sort -->

const arr2=arr.map(function(ele){
  // operation you do in here 
  return ele*2;
 
  
})

//console.log(arr2);

const arr3=["sweta","rk","arnab","sameer"];

//["SWETA","RK","ARNAB","SAMEER"];

const arrOfUpeer=[];

for(let i=0;i<arr3.length;i++){
  arrOfUpeer.push(arr3[i].toUpperCase());
}




const ro=arr3.map(function(ele){
 return ele.toUpperCase()
  
})

console.log(ro)


// Question 1-
// Given an array [1,2,3,4,5,6] ,return the array which contains the square of every element in an array 

// Given an array ,["john","bipasha","sameer","sweta"] you have to make first letter as Capital of
// ["John","Bipasha","Sameer","Sweta"];

// Given an array of string ["abcd","efgc","pqrc"];
// have to replace c 77 
// ["ab77d","efg77","pqr77"];




const stringArr= ["abcd","efgc","pqrc"];

console.log(stringArr.map(ele=>{
  return ele.replace("c",77)
  
}))




