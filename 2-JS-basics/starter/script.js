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

// var firstName = 'John';
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

// var age = 16;
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

// var s1 = (129 + 120 + 103) / 3;
// var s2 = (116 + 94 + 123) / 3;
// var s3 = (97 + 134 + 105) / 3;
// console.log(s1, s2, s3);
// if (s1 > s2){
//     console.log("s1\'s " + s1 + " point is higher");
// } else if (s2 > s1) {
//     console.log("s2\'s " + s2 + " point is higher");
// } else {
//     console.log("draw");
// }

// if (s1 > s2 && s1 > s3){
//     console.log("s1 rules");
// } else {
//     console.log("s1 doesn\'t rule")
// }

function calculateAge(birthYear) {
    return 2020 - birthYear;
}
var ageMe = calculateAge(1992);
//console.log(ageMe);

function yearsUntil(birthYear, name){
    var age = calculateAge(birthYear);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.');
    }
}
//yearsUntil(1390, 'John')

//function expression
var whatDo = function(job, name){
    switch(job){
        case 'teacher':
            return name + ' teaches coding';
        case 'driver':
            return name + ' drives a cab in NM';
        default:
            return name + ' does else';
    }
}

//console.log(whatDo('teacher', 'Jack'));

// Mutate array data
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1992, 1991, 1930);
// console.log(names[2]);
// console.log(names.length);
names[1] = 'Jack';
names[names.length] = 'Mary';
//console.log(names)
// var john = ['John', 1992, 'teacher', false];

// john.push('blue');
// john.unshift('Mr.') //appendleft
// john.pop();
// john.shift(); // popleft

// console.log(john);

// console.log(john.indexOf(1990));
// var isD = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
// console.log(isD);

// Objects and properties

// object literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['mother', 'father'],
//     job: 'teacher',
//     isMarried: false
// };
// console.log(john.family);
// console.log(john['family']);
// john.job = 'designer';
// john['isMarried'] = true;
//console.log(john);

// new object syntax
var jane = new Object();
jane.name = 'Jane';
jane['family'] = ['father', 'mother'];
//console.log(jane)

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['mother', 'father'],
    job: 'teacher',
    isMarried: false,
    ageCal: function(){
        this.age = 2020 - this.birthYear;
    }
};

john.ageCal();
// console.log(john);

//john.age = john.ageCal();




