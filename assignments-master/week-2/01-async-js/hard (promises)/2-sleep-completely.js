/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// function busyWait(milliseconds) {
//     return new Promise((resolve) => {
//         setTimeout((resolve)=>{
//             console.log("promice resolved after ",n);
//         },milliseconds*1000);

//         // Busy wait loop

//         resolve(`Busy wait completed for ${milliseconds} milliseconds`);
//     });
// }

function busyWait(milliseconds){
    return new Promise(resolve=>{
        const start = Date.now();
        while((Date.now()-start)<milliseconds){

        }
        resolve();
    });
}



// Example usage:
// busyWait(2000)
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

module.exports = busyWait;
