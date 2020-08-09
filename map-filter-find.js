// const number = [2, 3, 9, 6];
// const output = []

//  for (let i = 0; i < number.length; i++) {
//      const element = number[i];
//      const result = element * element
//      output.push(result);
//  }
//  console.log(output)


// --------map
// const number = [4, 80, 9, 7];
// // function square(element){
// //     return element * element
// // }
// const result = number.map(function(element, index, array){
//             // console.log(element, index, array)
//     let sajjat = element * element
//     return sajjat
// })
// console.log(result)

    

// const number = [4, 80, 9, 7];    241243,635269

// const result = number.map(x => x * x)
// console.log(result)


const number = [4, 80, 9, 7];
const result =number.filter(x => x < 5);
console.log(result)



// const number = [4, 6, 9, 7];
// const result =number.find(x => x > 5);
// console.log(result)