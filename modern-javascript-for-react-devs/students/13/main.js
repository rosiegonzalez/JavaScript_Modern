

// // File: main.js

// // Date: 5/24/2022

// const ex1 = () => {

//      const array = [1, '2', 3, 'test', 1.2];

//      console.log(countNumbers(array));

//     }

// // const ex2 = () => {

// //   const array = [12, 55, 2, 22, 11];
// //   console.log(minNumber(array));
// // };

    

        // const array1 = [1, 2, 3, 4, 5];
        // const array2 = ['a', 'b', 'c', 'd', 'e'];
        // console.log(interleave(arr1, arr2));

      

// //     //

// //     // Your functions here... ----------------------------------------------------------------------------------------------------------------------------

// //     //

//     const countNumbers = (array) => {

//     let numberCounter = 0;

//      for (let i = 0; i < array.length; i++) {

//      if (typeof(array[i]) === 'number') numberCounter++;

//     }

//      return numberCounter;

//     }

// // Exercise 2

// const minNumber = (arr) => {
//     let min= arr[0];

//     for(let i = 1; i < arr.length; i++) {
//         if (min > arr[i])
//             min = arr[i]
//     }

//     return min
// };

// Exercise 3

const interleave = (arr1, arr2) => {

    if ( arr1.length !== arr2.length) {
        return 'Error: Array length mismatch';
    }

    let result = '';

    for ( let i = 0; i < arr1.length; i++) {
        result += arr1[i] + arr2[i];

    }

    return result;
};


const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log(interleave(arr1, arr2));



//     // call your test cases ----------------------------------------------------------------------------------------------------------------------------

// const main = async () => {
//   // ex1();
//   //ex2();
//   ex3();
  
// };

// main();
