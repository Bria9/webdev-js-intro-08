// Prevent us from attempting to use variables
// that are not declared
"use strict"

// --------Basic for loop--------------------------------------

//Create an array and loop through it, logging out
// each value using the basic loop syntax. 

let arr1 = [12,35,77,89,5,16];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
 
}

// let catType = ["Abyssinian","Ragdoll","Maine Coon","Persian","Bombay"];
// let type = "";
// for (let i = 0; i < catType.length; i++) {
//     type = catType[i]; 
//     console.log(type);
// }


// --------for of loop--------------------------------------

//Create an array and loop through it, logging out
//each value using the "for...of" syntax. 



const colors =["red","Orange","Yellow","Green","Blue"];

for (let color of colors) {
    console.log(color);
    
}

// let array = [22,33,44,55,66];
// let num = 0;
// for (let number of array) {
//      if (number === 55) {
//         break;
//      }
//      else{num = number;}
// }
// console.log(num);





// --------Array.forEach()--------------------------------------

//Create an array and loop through it,
//logging out each value using the Array.forEach() method.


const elements = ["Ether ✧","Fire 🜂", "Air 🜁", "Water 🜄","Earth 🜃",];

 elements.forEach(function(element, index) {

    console.log(`${index}: ${element}`);
   
 })

// --------for of value reassignment--------------------------------------

 // Loop through an array using "for...of" and
 // try assigning all the elements a new value. What happens?


// console.log(type[0] = "dalmatian") 
// typeError Cannot assign 1st char of each string ;

//In a for...of loop, the loop variable (e.g., type) holds the value of
//the array element, not a reference to it. This means that modifying
//type directly will not modify the original array, because type is just
//a copy of the value, not a reference to the element in the array.


 let dogType = ["samoyed",  "Pomeranian", "Australian Shepherd", "Saluki"];

 for (let type of dogType) {
        console.log(type[0]); 
 }


// --------Array.forEach() value reassignment--------------------------------------

//again passes each element as a value so unable to reassign
// the array must be modified directly using the index

// slice method does not modify the original array 
// or string; instead, it creates and returns a shallow copy 
//based on the specified start and end positions.

let fruits = ["🍌","🍎", "🍓", "🍇","🥝"];

 fruits.forEach(function(fruit, index) {
    fruits[0] = "🥕"  + fruit.slice(2); 
 })

 console.log(fruits);

