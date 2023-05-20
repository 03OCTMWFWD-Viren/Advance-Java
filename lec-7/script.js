// Api Development:

// fetch api ->

// Callbacks, Promises, Theneable, Async await :

// callbacks: callbacks are function they passed as parameter 
// Exception handling : try, catch 

// function firstFunction(parameter, callbacks)
// {
//     callbacks();
// }

// callback hell :-
// The phenomenon which happens when we nest multiple callbacks within a function is called HTMLElement. 

// firstFunction(parameter,function(){
//     secondFunction(parameter, function(){
//         thirdFunction(parameter, function(){

//         });
//     });
// });

// Promises: States: Pending, fullfilled, Rejected, setInterval, setTimeout

// const mypromise = new Promise((resolve,reject)=>{
//     const error =false;
//     if(!error){
//         resolve("okay! your Promise has been resolved");
//     }else{
//         reject("No! we are Rejecting your request");
//     }
// });
// console.log(mypromise);

// Do get the value of Promise
// myPromise.then(value=>{
//     console.log(value);
// });
// myPromise.then(value=>{
//     console.log(value);
//     return value + "Viren";
// }).then(newValue=>{
//     console.log(newValue);
// });

// const myPromise = new Promise((resolve,reject)=>{
//     const error = true;
//     if(!error){
//         resolve ("Okay your Promise has been resolved");
//     }else{
//         reject("No we reject the Promise");
//     }
// });
// console.log(myPromise);

// const myPromise = new Promise((resolve,reject)=>{
//     const error = true;
//     if(!error){
//         resolve ("Okay your Promise has been resolved");
//     }else{
//         reject("No we reject the Promise");
//     }
// });
// myPromise.then((value)=>{
//     console.log(value);
// });

// Handle the exception by using catch:-
myPromise.then(value=>{
    return value + "Ram";
}).then(newValue=>{
    console.log(newValue);
}).catch(err=>{
    console.log(err);
});