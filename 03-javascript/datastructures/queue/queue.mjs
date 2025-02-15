export class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element)
  }

  dequeue() {
    return this.items.shift()
  }

  peek() {
    return this.items[0]
  }

  isEmpty() {
    if (this.items.length === 0){
      return true
    }
    else{
      return false
    }
  }
}
const obj = new Queue()

// Function to reverse a queue
export function reverseQueue(queue) {
  let newQ= []
  let queueCopy = [...queue]
  while (queueCopy.length > 0){
    newQ.push(queueCopy.pop())
  }
  return newQ
  
}

// Function to check if a string is a palindrome using a queue
export function isPalindrome(input) {
  let len = Math.floor(input.length/2)
  let first = input.slice(0,len)
  let second = input.slice(-len)

  if (first == second){
    return 'it is palindrone'
  }
  else{
    return 'it is not palindrone'
  }
  //if (input[0,len] == input[input.lenght -1, len]){
    //return 'it is palindrone'
  //}
  //else{
   

  }

// CircularQueue class for implementing a circular queue
export class CircularQueue {
  constructor(size) {
    this.size = size;
    this.items = new Array(size);
    this.front = -1;
    this.rear = -1;
  }

  enqueue(element) {
    // Implement enqueue operation for CircularQueue
  }

  dequeue() {
    // Implement dequeue operation for CircularQueue
  }

  peek() {
    // Implement peek operation for CircularQueue
  }

  isEmpty() {
    // Implement isEmpty operation for CircularQueue
  }

  isFull() {
    // Implement isFull operation for CircularQueue
  }
}

// Function to simulate a queue system
export function simulateQueue(customers, serviceTime) {
  // Implement simulateQueue function
}