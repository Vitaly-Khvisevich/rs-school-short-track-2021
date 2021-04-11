const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.dimension = [];
    this.first = null;
    this.second = null;
  }

  get size() {
    return this.dimension.length;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    this.dimension.push(element);
    if (!this.second) {
      this.second = newNode;
      this.first = newNode;
    } else {
      this.second.next = newNode;
      this.second = newNode;
    }
  }

  dequeue() {
    this.first = this.first.next;
    return this.dimension.shift();
  }
}

module.exports = Queue;
