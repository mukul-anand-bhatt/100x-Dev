//parse\\ refers to analyse characters of a string 
console.log(parseInt("42px")); 
console.log(parseInt("dbcyu42px"));

//push\\
const newArray = [1,2,3];
newArray.push(2); //pushes at the last
console.log(newArray); 
newArray.pop(); //pops from the last 
console.log(newArray);
newArray.shift();//shifts towards right and pops the first number 
console.log(newArray);
newArray.unshift(2);
console.log(newArray);

//similar to forLoop\\
const insArray=[1,2,3];
function logthing(str){
    console.log(str);
}
insArray.forEach(logthing);
class Animal {
    constructor(name, legCount){
        this.name = name;
        this.leg = legCount;
    }
   
    describe(){
        console.log(`${this.name} has ${this.leg} legs`);
    }
    
}
let man = new Animal("Koi to hai", 2); // Assuming "Koi to hai" has 2 legs

