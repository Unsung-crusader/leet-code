class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getNode(index) {
    if (this.isEmpty() || index < 0 || index > this.length - 1) return undefined;

    let curr = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) return curr;
      curr = curr.next;
    }
  }

  get(index) {
    const foundNode = this.getNode(index);
    return foundNode ? foundNode.val : -1;
  }

  addAtHead(val) {
    const newNode = new Node(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  addAtTail(val) {
    if(this.isEmpty()) return this.addAtHead(val);

    const newNode = new Node(val);
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }

  addAtIndex(index, val) {
    if(index === 0) return this.addAtHead(val);
    if(index === this.length) return this.addAtTail(val);
    if(index < 0 || index > this.length || this.isEmpty()) return;

    const newNode = new Node(val);
    const leftNode = this.getNode(index - 1);

    newNode.next = leftNode.next;
    leftNode.next = newNode;

    this.length++;
  }

  deleteFirst() {
    if(this.length === 1) {
      this.head = null;
      this.tail === null;
    } else {
      const newHead = this.head.next;
      this.head = newHead;
    }

    this.length--;
  }

  deleteLast() {
    const secondToLastNode = this.getNode(this.length - 2);
    secondToLastNode.next = null;
    this.tail = secondToLastNode;
    this.length--;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) return;
    if(index === 0) return this.deleteFirst();
    if(index === this.length - 1) return this.deleteLast();

    const leftNode = this.getNode(index - 1);
    const removedNode = leftNode.next;
    leftNode.next = removedNode.next;

    this.length--;
  }

  isEmpty() {
    return this.length === 0;
  }
}
