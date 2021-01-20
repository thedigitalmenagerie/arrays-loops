// console.log(arraysloops);

// const students = [ 'Katy', 'Jackie', 'Sean', 'Nathan'];

// console.log(students.length);

// Accessing Items in an Array

// console.log(students[1]); // gets jackie out of array

// console.log(students[students.length -1]); // gets nathan

// console.log(students[-1]); // undefined bracket is index

// const valuePrinter = (array, index) => {
//   return (array[index]);
// }
// console.log(valuePrinter[1, 2, 3, 4, 5, 6], 4);

// console.log(valuePrinter[students, 2]);

// const studentsNamedGreg = (array, students) => {
//   return array.includes(students);
// };

// console.log(array[students]);

// Loops

// conditionals run once if condition is true
// loops keep running

// for loops

// for (setup (i=0); condition(true or false); increment (i++ --)) {
//   console.log('Do something . . .';)
// }


// for (let i = 0; i <= 15; i++) {
//   console.log(i);
// }

// const functionforTad = () => {
//   for (let i = 0; i <= 15; i++) {
//    console.log(i);
//  }
// }

// functionforTad();

// arrays with loops

// const ec14Instructors = ['Aja', 'Trinity', 'Dr.T', 'Discussion Tickets'];

// for (let i = 0; i < ec14Instructors.length; i++) {
//   console.log(ec14Instructors)[i];
// }

// array loops functions evil combo

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const colorLoop = () => {
  let domString = '';

  for (let i = 0; i < colors.length; i++) {
    domString += `<h1>${colors[i]}</h1>`
  }

console.log(domString);
}

// colorLoop();

// const instructors = [
//   { first: 'Trinity', last: 'Christiana' },
//   { first: 'Aja', last: 'Washington' },
//   { first: 'Teresa', last: 'Vasquez' },
// ];

// const nameLoop = () => {
//   let domString = '';

//   for (let i = 0; i < instructors.length; i++) {
//     domString += `<h1>${instructors[i].first}</h1>`;
//   }

//   console.log(domString);
// }

// nameLoop();

const array1 = ['cow', 'dog', 'cat'];
const string1 = array1.join(', ');
const string1ToArray = string1.split(', ');
// // console.log(string1);
// console.log(string1ToArray);

//.push() & .pop()
// arrays are muteable (they can be altered on const because you are not reassigning array)
// objects too update vs reassign

// array1.pop();
// console.log(array1);

// array1.push('cat');
// console.log(array1)
;

// unshift() and shift()

// array1.unshift('cow');
// console.log(array1);
// array1.shift('cat');
// console.log(array1)


