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
function greet(name, callback) {
   console.log('Hello ' + name);
   callback();
 }
 
 function sayGoodbye() {
   console.log('Goodbye!');
 }
 
 greet('Alice', sayGoodbye);