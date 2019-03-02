# radix-sort

naive implementations of radix sort

## Binary MSD In-Place
binary most significant digit in place algorithm recursively separates the elements of the array according to whether their kth binary digit is a 0 or a 1

## LSD
least significant digit radix sort is stable. this implementation has queues for digits:

- for each digit `d`
  - for each key `k` in array `a`
    - enqueue `k` into bucket `d`
    - for each bucket `b` in order
      - dequeue `k` back into `a`
- done

```javascript
const sort = require('./lsd')
const arr = [170, 45, 75, 90, 02, 802, 2, 66]
sort(arr)
console.log(arr) // [ 2, 2, 45, 66, 75, 90, 170, 802 ]
```

## License
MIT