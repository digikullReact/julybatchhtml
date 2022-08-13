//Array and Array methods in JS -->
//push 
//pop
//shift 
//unshift
//slice
//splice
//join
//forEach
//concat
//indexOf


//----reduce ,map,filter,fill,find ,spread operator //includes //reverse replace //sort

//let  arr=[1,2,3,4,5,6,7];

//push is used to insert an element at the end of an array

//arr.push(44);

//console.log(arr);

//pop is used to get the last item of an array
// and also it removes the last item as well
//let rem=arr.pop()
//console.log(arr.pop());
//console.log(rem);
//console.log(arr);

//arr[3]=890;
//console.log(arr);


// unshift will push to the beginning of an array
//arr.unshift(789);  

//console.log(arr);
//shift will remove the first element of an array and returns it

//console.log(arr.shift());

//console.log(arr);

//slice method it gives you the part of an array 
// from begiining index till the end index ,end index is not included ,and it doesnt modify the original array
/*
let slc=arr.slice(0,3);

console.log(slc);
console.log(arr);  //original array is not modified
*/

//splice method also does the same thing that slice does\
// but it modifies the original array

//let splc=arr.splice(0,3);
//console.log(splc);
//console.log(arr);  //original array is  modified


// How to insert an element at a particular position in an array 


function insertItem(arr,index,number){

  //[1,2,3,4,5] //slice or splice 

//slice way

  let slicedArray=arr.slice(0,index);

  slicedArray.push(number);

  //console.log(slicedArray);

  let slicedArray2=arr.slice(index,arr.length);

 // console.log(slicedArray2);


 const newArray= slicedArray.concat(slicedArray2);

  //console.log(newArray);

  
return newArray;
  


  
}

//console.log(insertItem([1,2,3,4,5],2,99));




/*
const insertItem2 = (arr)=>{
  let b = arr.splice(3,7)
  let a = (arr.splice(0,3))
  a.push(33);
  let c = a.concat(b)
  return c;
}

console.log(insertItem2(arr))
*/

//join method --converts array into string 
//const greeting=["hi","people","how","are","you?"];

//let stringJoined=greeting.join("+");
//console.log(stringJoined);
//console.log(typeof 8);

//indexOf  gives you the index (position) of an element if it exists otherwise it returns -1;
//const arr = [4, 5, 8, 90,90, 80, 70, 30];

//console.log(arr.indexOf(50));


//forEach is just like forLoop ,only applicable for array
//used to iterate array elements -->
//just a replacement for loop
const arr=[1,2,2,8,9,8,7];


arr.forEach(function callback(arnab) {
  //console.log(arnab);
  
})


// A callback is a function which is passed as an argument to another function 

//whatever the question you had done with forloop use forEach in them
/*
let sum=0
arr.forEach(function callback(ele) {
  //console.log(arnab);
  sum=sum+ele;  // arr[i] ---->ele
  
})

console.log(sum);

*/
//Objects   /Object literals 

let obj={name:"Arnab",location:"WB",works:"SE",
        subjects:["JS","REACT"]
        
        }
console.log(obj.name);
console.log(obj["name"]);

console.log(obj.location);
console.log(obj["location"]);

console.log(obj.subjects);
console.log(obj["subjects"][0]);

console.log(Object.keys(obj));
console.log(Object.values(obj));
