//create a map fn that takes array and returns
//fn as a input and returns the transfoemed array as output
// arr = [1, 2, 3, 4, 5];
// const map = (arr, fn) => {
//   const transformedArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     transformedArray.push(fn(arr[i]));
//   }
//   console.log(transformedArray);
//   return transformedArray;
// };
const arr = [1,2,3,4,5];
const newarray = arr.map((i)=>{
   return i*i;
})
console.log(newarray);