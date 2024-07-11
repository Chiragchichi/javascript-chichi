// objects literals


let mySym = Symbol("myKey1")
let myObject = {
    name:"chirag",
    [mySym]:"myKey1",
    age:19,
    email:"chirag.google.com",
    location:"delhi",
    isLoggedin:false,
    lastlogindays:["MONDAY","FRIDAY"]
}
// console.log(myObject);
// console.log(myObject.email);
// console.log(myObject["isLoggedin"]);
// console.log(myObject[mySym]);

myObject.email="chirag.gmail.com"
// Object.freeze(myObject)
myObject.email="chirag@gmail.com"
// console.log(myObject.email)
// console.log(myObject);

myObject.greeting = function(){
    console.log("hello js user");

}
console.log(myObject.greeting());
myObject.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);

}
console.log(myObject.greetingTwo());