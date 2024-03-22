let promise = new Promise(function (resolve,reject){
    console.log("hello")
    resolve(56)
})
console.log("hello one")
setTimeout (function(){
    console.log("hello two in 2 seconds")
},2000)
console.log("my name is Hello Three")
console.log(promise)