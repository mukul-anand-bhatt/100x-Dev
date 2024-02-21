// let name = "Mukul";
// let age = 20;
// let ismarried = false;

// console.log("this persons name is " + name + " and his age is " + age );

// if (ismarried == false){
//     console.log(name+" is not married");
// }
// else{
//     console.log(" is married");
// }




// let answer = 0;
// for(let i=0;i<=100;i=i+1){
//     answer = answer+i;
// }
// console.log(answer);





// const ages = [20,120,121,302,21];
// for(let i=0;i<ages.length();i++){
//     if(ages[i] %2== 0){
//         console.log(ages[i]);
//     }
// }

// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2;
    
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }
// const ans = sum(1,2,displayResult);
// You are only allowed to call one function after this
// How will you displayResult of a sum

// function greet(){
//     console.log("Hello")
// }
let i=30;
function timer(){
    // if(i>0){
    //     console.log(i)
    //     i--;
    //     setInterval(timer,1000)
    // }
 
        console.clear();
        console.log(i);
        
        if(i===0)
        {
        clearInterval(i);
    }
    i--;
}

const time = setInterval(timer, 1000); 
// let i = 0;
// function counter() {
//     if(i <= 30) {
//         console.log(i);
//         i++;
//         setTimeout(counter, 1000);
//     }
// }
// counter();
