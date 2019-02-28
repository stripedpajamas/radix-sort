/**
 * Basic linked list node
 */
class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

/**
 * Simple linked list implementation for quicker dequeuing
 */
class Queue {
  constructor () {
    this.head = this.tail = null
    this.size = 0
  }
  enqueue (val) {
    const node = new Node(val)
    if (this.tail) {
      this.tail.next = node
      this.tail = node
    }
    if (!this.head) {
      this.head = this.tail = node
    }
    this.size++
  }
  dequeue () {
    if (!this.head) return null
    const node = this.head
    this.head = this.head.next
    this.size--
    return node.val
  }
  *values () { // iterator that dequeues
    while (this.head) {
      yield this.dequeue()
    }
  }
}

module.exports = Queue
