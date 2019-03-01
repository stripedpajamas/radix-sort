function sort (arr) {
  return sortSection(arr, -1, arr.length)
}

function sortSection (arr, zeroBoundary, oneBoundary, bitIdx) {
  if (bitIdx === 31) {
    return
  }
  let z = zeroBoundary
  let o = oneBoundary
  while (z < o) {
    let idx = z + 1
    if (getKthBit(arr[idx], bitIdx)) {
      swap(arr, idx, --o)
    } else {
      z++
    }
  }
  return sortSection(arr, z, o, bitIdx + 1)
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
