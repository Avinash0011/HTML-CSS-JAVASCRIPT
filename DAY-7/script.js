// Immediately Invoked Function Expression (IIFE)
// (function(){
//     const password = '1234567qwerty';
// })()

// Callback: A function passed into another function, to be executed lated.

// function greet(uname, callback) {
//     console.log("Hello", uname);
//     callback();
// }
// function done() {
//     console.log("Greeting is completed!");
// }
// greet("John Doe", done);

// Callback Hell
// getUser(function(user){
//     getOrders(user.id, function(orders){
//         getOrderDetails(orders[0].id, function(details){
//             getPaymentStatus(details.paymentId, function(status){
//                 console.log(status);
//             })
//         })
//     })
// })

// Problems with Callback Hell
// 1. Code becomes hard to read
// 2. Hard to debug
// 3. Hard to maintain
// 4. Error handling becomes messy
// 5 Nested architecture keeps growing

// Promise: A JS Object that represents the eventual completion or failure of an asyncronous operation.
// Promise States: Pending, Fullfilled, Rejected

// const myPromise = new Promise((resolve, reject)=>{
//     const success = false;
//     if(success){
//         resolve("Data is resolved");
//     }else{
//         reject("Data is lost");

//     }
// })

// myPromise
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("Error:", error);
// })
// .finally(()=>{
//     console.log("Promise Closed"); 
// })

// Using Callback Hell 
// loginUser(function(user){
//     getProfile(user.id, function(profile){
//         getPost(profile.id, function(posts){
//             console.log(posts); 
//         })
//     })
// })

// Using Promises
// loginUser()  // Promise Chaining
// .then((user)=>{getProfile(user.id)})
// .then((profile)=>getPost(profile.id))
// .then((posts)=>{console.log(posts)})
// .catch((error)=>console.log("Error:", error))

// Asyncronous operation
// const download = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Download is completed!");
//     }, 3000);
// })
// download.then((data)=>{
//     console.log(data);
// })

// Promise.resolve: Creates an resolved promise immediately
// Promise.resolve("This is fullfilled")
// .then(console.log)

// Promise.reject: Creates a rejected promise immediately
// Promise.reject("This is Rejected")
// .catch(console.log);

// Promise.all: runs multiple promises simultanously
// const p1 = Promise.resolve("A");
// const p2 = Promise.resolve("B");
// const p3 = Promise.resolve("C");

// Promise.all([p1, p2, p3]).then(result=>console.log(result))

// Promise.race: returns whicherver promise settles first(fullfilled, rejected)
// const p1 = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("Promise 1");
//     }, 3000);    
// })
// const p2 = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("Promise 2");
//     }, 1000);    
// })
// Promise.race([p1, p2]).then(result=>console.log(result))

// Promise.allSettled: waits for every Promise, regarless opf success or failure
// Promise.allSettled([
//     Promise.resolve("A"),
//     Promise.reject("B")
// ]).then(console.log)

// Promise.any: return the first settled promise
// Promise.any([
//     Promise.reject("B"),
//     Promise.resolve("C"),
//     Promise.resolve("A"),
// ]).then(console.log)

// const h1 = document.querySelector('#postTitle');
// const id = document.querySelector('#postId');
// const body = document.querySelector('#postBody');

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(res=>res.json())
// .then(post=>{
//     h1.innerText = post.title;
//     id.innerText = post.id;
//     body.innerText = post.body;
// })

// Higher Order Function (HOF)
// 1. Accepts another function as an argument
// 2. Return another function

// #1
function greet(uname, callback) { //HOF
    console.log("Hello", uname);
    callback();
}
function done() { // Callback
    console.log("Greeting was successfull");
}

greet("John", done);

// #2
function multiply(multiplier) {
    return function (num) {
        return num * multiplier;
    }
}
const double = multiply(5);
console.log(double(10));
