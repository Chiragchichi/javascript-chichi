const marvel = ["ironman","hulk","thor"]
const dc = ["batman","superman","flash"]

// marvel.push(dc)
// console.log(marvel);

// const allHeros = marvel.concat(dc)
// console.log(marvel);

const all_new_heros = [...marvel,...dc]

// console.log(all_new_heros);

const newArray = [1,2,3,4,5,[6,7,8],[6,5,4,3,[3,4,6,8]]]
// console.log(newArray.flat(Infinity));

console.log(Array.isArray("chirag"));
console.log(Array.from("chirag"));
console.log(Array.from({name:"chirag"}));

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));


