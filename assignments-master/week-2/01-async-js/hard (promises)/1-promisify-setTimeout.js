/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function wait(n) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Promise resolved after ",n," seconds");
//         }, n * 1000);
//     });
// }

// // Example usage:
// wait(1)
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     });


// function wait(n){
//     return new Promise = ((resolve)=>{
//         setTimeout(()=>{
//             resolve("Promise resolve After few seconds",n);
//         },n*1000); 
//     });
// }
// // example usage
// // wait (1)
// //     .then((message)=>{
// //         console.log(message)
// //     })
// //     .catch((error)=>{
// //         console.error(error);
// //     });

function wait(n){
    return new Promise(resolve=>{
        setTimeout(resolve,n*1000);
    }); 
   
}
wait();
// module.exports = wait;
