/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

const wait = require("./1-promisify-setTimeout");

function wait1(t1) {
  return new Promise(resolve=>{
    setTimeout(resolve,t1*1000);
  })
}

function wait2(t2) {
    return new Promise(resolve=>{
        setTimeout(resolve,t2*1000);
    })
}

function wait3(t3) {
  return new Promise(resolve=>{
    setTimeout(resolve,t3*1000);
  })
}

function calculateTime(t1, t2, t3) {
   const starttime = Date.now();
   return Promise.all([wait1(t1),wait2(t2),wait3(t3)])//ppromise.all is used so that many promise 
                                                        //requests 
                                                        //can be fullfilled a t the same time
   .then(()=>{
    const endtime = Date.now();
    return endtime-starttime;
   })
}

module.exports = calculateTime;
