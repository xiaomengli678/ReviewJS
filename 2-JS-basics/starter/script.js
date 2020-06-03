// // var firstName = "John";
// //console.log(firstName);

// var lastName = "Smith";
// var age = 28;

// var fullAge = true;
// //console.log(fullAge);

// var job;
// //console.log(job)

// job = "Teacher";
// //console.log(job);

// // learn javascript
// /* 
// * Variable mutation and type coercion 
// */

// var firstName = "John";
// var age = 28;

// var job, isMarried;
// job = "teacher";
// isMarried = false;

// console.log(firstName + " is a " + age)

// // Variable mutation
// age = "twenty eight"
// job = "driver";

// //alert(firstName + " is a " + job)
// var lastName = prompt("what is his last name?");
// console.log(firstName + " " + lastName);

// // Math Operators
// var h = 2018 - 27;
// console.log(h + 2);
// console.log(h * 2);
// console.log(h / 10);

// // Logical operators
// var ageA = 1;
// var ageB = 5;
// var ageOlder = ageA > ageB;
// console.log(ageOlder);

// // typeof operator
// console.log(typeof ageOlder);
// console.log(typeof "lalala");
// console.log(typeof ageB);
// console.log(typeof l);

// // Multiple assignments
// var x, y;
// x = y = (26 + 34) / 7;
// console.log(x, y);

// // More operators
// x = x * 2;
// x *= 2;
// x += 1;
// x++;

var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married'){
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var massMark = 78; // kg
// var heightMark = 1.69; // meters

// var massJohn = 92;
// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// } else {
//     console.log('John\'s BMI is higher than Mark\'s.')
// }

var age = 16;
// if (age < 13){
//     console.log(firstName + ' is a boy. ');
// } else if (age >= 13 && age < 20){
//     console.log(firstName + ' is a teenager. ');
// } else {
//     console.log(firstName + ' is a man. ');
// }

// age >= 18 ? console.log(firstName + ' drinks beer. ') : 
// console.log(firstName + ' drinks juice')

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// sWitch
// var job = 'instructor';
// switch(job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches coding.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an Uber.');
//         break;
//     default:
//         console.log(firstName + ' does something else');
    
// }

// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy. ');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager. ');
//         break;
//     default:
//         console.log(firstName + ' is a man. ');

// }

// falsy values: undefined, null, 0, '', NaN
// var height = 23;
// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable not defined');
// }

// // Equality operators
// if (height == '23') {
//     console.log('The == operator does type coercion !')
// }

var s1 = (129 + 120 + 103) / 3;
var s2 = (116 + 94 + 123) / 3;
var s3 = (97 + 134 + 105) / 3;
console.log(s1, s2, s3);
if (s1 > s2){
    console.log("s1\'s " + s1 + " point is higher");
} else if (s2 > s1) {
    console.log("s2\'s " + s2 + " point is higher");
} else {
    console.log("draw");
}

if (s1 > s2 && s1 > s3){
    console.log("s1 rules");
} else {
    console.log("s1 doesn\'t rule")
}



