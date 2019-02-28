const Queue = require('./Queue')

// in place, sorts least significant digits first
function sort (arr) {
  // a bucket for each digit
  const buckets = new Array(9)

  // iterate on powers of ten (to touch each digit)
  for (let p = 10; true; p *= 10) {
    let someNonZero = false
    for (let n of arr) {
      // for each number, enqueue it into its digit's bucket
      let d = Math.floor((n % p) / (p / 10))
      if (d) someNonZero = true
      if (!buckets[d]) buckets[d] = new Queue()
      buckets[d].enqueue(n)
    }
    // if power > largest n, we're done
    if (!someNonZero) break

    // dequeue each bucket back into the array
    let ptr = 0
    for (let b of buckets) {
      if (!b) continue
      for (let n of b.values()) {
        arr[ptr++] = n
      }
    }
  }
}

module.exports = sort
