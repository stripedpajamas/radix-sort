const lsd = require('./lsd')
const binaryMsd = require('./binaryMsd')

let arr = [170, 45, 75, 90, 2, 802, 2, 66]

// lsd(arr)
// console.log(arr) // [ 2, 2, 45, 66, 75, 90, 170, 802 ]

arr = [171, 45, 75, 90, 2, 802, 2, 66]
binaryMsd(arr)
console.log(arr) // [ 2, 2, 45, 66, 75, 90, 170, 802 ]
