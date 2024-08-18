// const language = ['java','python','cpp','rb','swift']
// // language.forEach( function (i){
//     console.log(i);
    
// } )
// language.forEach( (i)=>{
//     console.log(i);
    
// } )
// function printME(item) {
//     console.log(item);
    
// }
// language.forEach(printME)
// language.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
    
// } )
const programming = [
    {
        languageName:'javascript',
        languageFile:'js'
    },
    {
        languageName:'java',
        languageFile:'java'
    },
    {
        languageName:'python',
        languageFile:'py'
    }



]

programming.forEach( (item)=>{
    console.log(item.languageFile);
    
} )