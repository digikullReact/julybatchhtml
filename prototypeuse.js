let arr=[1,2,3,4,5];
arr.forEach(function(ele){
  console.log(ele);
})

//
Object.prototype.myOtherFavFunction=function(){
  console.log("ding dong 222222");
}
Array.prototype.myFavfunction=function(){
  console.log("ding dong");
}

const arr2=[2,3,4,4,8];
const arr3=["sjsjsjs","hello"];
arr3.myFavfunction();
arr3.myOtherFavFunction();
