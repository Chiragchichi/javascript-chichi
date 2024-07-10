const name = "chirag-barua-chichi"
const repoCount = 2

console.log(`my name is ${name} and my i have ${repoCount} github repositories`);
console.log(name[0]);
console.log(name.__proto__);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(3));
console.log(name.indexOf('r'));


const newString = name.substring(0,4)
console.log(newString);

const anotherString = name.slice(-6,3)
console.log(anotherString);


 const nwstringOne = "   chichi   "
 console.log(nwstringOne);
 console.log(nwstringOne.trim());

const url ="https://chirag.com/chirag%70barua"
console.log(url.replace("%70","-"));
console.log(url.includes('rudi'));
console.log(name.split("-"));

