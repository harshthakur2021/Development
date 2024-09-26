// console.log("hello")
// console.log("hello")
// let number =5; // Variable initially holds a number
// number= "Hello"; // Variable now hold a string
// console.log(number);//

// Variables:
//  const a =1;
 
//  console.log(a);
//  // Datatypes
//  let firstname= "harkirat";
//  let age= 18;
//  let isMarried= true;
 

 // if else
//  if (isMarried==true){
//     console.log(firstname + "is not married");
//  } else{
//     console.log(firstname + "is married");
//  }
//  let answer=0;
//  // Loops
//  for (let i=0; i<=100; i=i+1){
//     answer = answer +i;
//  }
//  console.log(answer);

// Arrays And Objects
// const personarray=["harkirat", "raman","kirat"]
// console.log(personarray[0])
// console.log(personarray[1])
// console.log(personarray[2])

//Objects
// const user1={
//    firstname: "harkirat",
//    gender: "male"
// }

// console.log(user1["firstname"])

// Functions
// function sum(a,b){
//    return a+b;
// }
// const value= sum(1,2)
// console.log(value)
// function greet(name, callback) {
//    console.log('Hello ' + name);
//    callback();
//  }
 
//  function sayGoodbye() {
//    console.log('Goodbye!');
//  }
 
//  greet('Alice', sayGoodbye);

// Async And Sync Function in Js
// function greet() {
//   console.log("Hello, there!");
// }

// setTimeout(greet, 2000);
// console.log("This message will appear first.");

// Promises
// let p= new Promise(function(resolve){
//   resolve("heyy")
// });
// p.then(function(){
//   console.log(p);
// })

// Asyns & Await function in Js

// async function getData(){

//   setTimeout (function(){
//     console.log("Hey there Myself Harsh Thakur")
//   },3000);
// }

// let output= getData();
// console.log(output);

// await - ?

// Fetch Api

// async function getData(){
//   // get request -async
//   let response=  await fetch('https://jsonplaceholder.typicode.com/posts/',{
//       method: "GET"
//   })
//   // parse json- async
//   let data= await response.json();
//   console.log(data);
// }
// //     
// getData();

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://example.org/post"

const options ={
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
}
async function getData(){
  const response = await fetch(url,options);
  let data= await response.json();
  console.log(data);
}
 getData(); 


