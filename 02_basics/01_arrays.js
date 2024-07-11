//arrys

let myArray = [1,2,3,4,5,6]
// console.log(myArray);

let myArray2 = new Array(1,2,3,4)
// console.log(myArray[4]);

myArray.push(7)
myArray.push(8)
myArray.pop()
console.log(myArray);

myArray.unshift(0)
myArray.shift(0)
console.log(myArray);
console.log(myArray.includes(9));
console.log(myArray.indexOf(5));

const newArray=myArray.join()
console.log(myArray);
console.log(newArray);
console.log(typeof newArray);
console.log("A ",myArray);

const myn1 = myArray.slice(1,4)


console.log(myn1); 
console.log("B ",myArray);
const myn2 = myArray.splice(1,4)
console.log("c ", myArray);
console.log(myn2);
