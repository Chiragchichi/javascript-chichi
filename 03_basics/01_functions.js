// let intro=function() {
//    console.log("c")
//    console.log("h")
//    console.log("i")
//    console.log("r")
//    console.log("a")
//    console.log("g")
    
// }
// intro()

function sum(num1,num2){
   return num1+num2
}
let result=sum(4,6)
// console.log(result);

function loggedIn(username){
   if(username===undefined){
      console.log("please enter a name");
      return 
   }
      return `${username} just logged in`

}
console.log(loggedIn());