let initial= Date.now();
console.log(initial)
setTimeout(()=>{
  console.log("hello");
},0)
let newInitial=Date.now();
console.log(newInitial);
console.log(Date.now()-initial)


// ASYNCH


// let count = 30;
// function countDown() {
//   console.clear()
//   console.log(count);
//   if (count === 0) {
//     clearInterval(counter);
//   }
//   count--;
// }
// const counter = setInterval(countDown, 1000);


// COUNTER 30 - 0


// setInterval(
//   ()=>{
//     console.clear()
// let currentTime = new Date().toLocaleTimeString("en-US", {timeZone: "Asia/Kolkata"});
// console.log(currentTime);
//   },1000
// )


// CLOCK


