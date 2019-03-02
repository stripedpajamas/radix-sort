function sort (arr) {
  // find a good starting place
  const initial = Math.min(...arr.map(Math.clz32))
  return sortSection(arr, -1, arr.length, initial)
}

function sortSection (arr, zeroBoundary, oneBoundary, bitIdx) {
  if (bitIdx === 31 || zeroBoundary === arr.length - 1 || oneBoundary === 0) {
    return
  }
  let z = zeroBoundary
  let o = oneBoundary
  while ((z + 1) < o) {
    if (getKthBit(arr[z + 1], bitIdx)) {
      swap(arr, z + 1, --o)
    } else {
      z++
    }
  }
  sortSection(arr, zeroBoundary, z + 1, bitIdx + 1) // sort zero section
  sortSection(arr, o - 1, oneBoundary, bitIdx + 1) // sort one section
}

function getKthBit (n, k) {
  return (n & (1 << (31 - k))) >> (31 - k)
}

function swap (arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

module.exports = sort
