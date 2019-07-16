// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let node = this.head;
    let count = 0;

    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    let current = this.head;
    if (current === null || current === undefined) {
      //empty list
      return null;
    }
    if (current.next === null) {
      //one element in list
      this.head = null;
      return this.head;
    }
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
    return current.next;
  }

  insertLast(data) {
    let insert = new Node(data);
    let current = this.head;
    if (current === null) {
      this.head = insert;
      return this.head;
    }
    if (current === undefined) {
      let list = new LinkedList();
      list.head = insert;
    }

    while (current.next !== null) {
      current = current.next;
    }
    current.next = insert;
    insert.next = null;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(integer) {
    if (!this.head) {
      return null;
    }
    if (integer === 0 && this.head.next) {
      this.head = this.head.next;
      return this.head;
    }
    let current = this.head.next;
    let previous = this.head;
    let count = 1;
    while (current) {
      if (count === integer) {
        previous.next = current.next;
        return;
      }
      current = current.next;
      previous = previous.next;
      count++;
    }
    return null;
  }

  insertAt(data, integer) {
    let insert = new Node(data);
    if (!this.head) {
      //empty list
      this.head = insert;
      return this.head;
    }
    if (integer === 0 && this.head) {
      insert.next = this.head;
      this.head = insert;
      return this.head;
    }
    let current = this.head.next;
    let previous = this.head;
    let count = 1;
    while (count < integer) {
      if (current.next === null) {
        current.next = insert;
        return;
      }
      current = current.next;
      previous = previous.next;
      count++;
    }
    previous.next = insert;

    insert.next = current;
    return insert;
  }

  forEach(func) {
    let current = this.head;
    while (current) {
      func(current);
      current = current.next;
    }
  }
}

module.exports = { Node, LinkedList };
