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

/**
 * 
 * @url https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1212/
 */

function hasCycle(head) {
  if(!head || head.next === null) return false;

  let slowPointer = head;
  let fastPointer = slowPointer;

  while(true) {
    if(fastPointer === null) return false;

    /** we move the slowPointer by 1 unit */
    slowPointer = slowPointer.next;

    /** and the fastPointer by 2 units */
    fastPointer = fastPointer.next.next;
    
    /**
     * if there is a cycle in the linked list,
     * the two pointers are bound to meet at some point
     */
    if(slowPointer === fastPointer) return true;
  }

  return false;
}

/**
 * @url https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1214/
 */

function detectCycle(head) {
  const noCycle = null;

  if(!head || head.next === null) return noCycle;

  let fastPointer = head;
  let slowPointer = fastPointer;

  while(true) {
    if(!slowPointer.next) return noCycle;
    slowPointer = slowPointer.next;

    if(!fastPointer.next || !fastPointer.next.next) return noCycle;
    fastPointer = fastPointer.next.next;
    
    if(slowPointer === fastPointer) break;
  }

  slowPointer = head;
  while(true) {
    if(slowPointer === fastPointer) return slowPointer;

    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  return slowPointer;
}


/**
 * @url https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1215/
 */

function getIntersectionNode(headA, headB) {
  if(headA === headB) return headA;
  if(!headA || !headB) return null;
  const nodes = new Set();
  
  let curr = headA;
  while(true) {
    nodes.add(curr);
    if(!curr.next) break;
    curr = curr.next;
  }
  
  curr = headB;
  while(true) {
    if(nodes.has(curr)) return curr;
    if(!curr.next) break;
    curr = curr.next;
  }
  return null;
}

/**
 * @url https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1296/
 */

function removeNthFromEnd(head, n) {
  let length = 0;
  while(true) {
    if ( )
  }
}

const linkedList = new MyLinkedList();
linkedList.addAtTail(1);

const headA = { val: 3, next: null };
const headB = { val: 2, next: { val: 3, next: null } };
// linkedList.addAtTail(2);
// linkedList.addAtTail(2);
// linkedList.addAtTail(2);
// linkedList.addAtTail(2);
// linkedList.addAtTail(2);
// linkedList.addAtTail(2);
// linkedList.addAtTail(2);

// let _head = linkedList.head;
// let current = linkedList.head;
// while(current.next) {
//   current = current.next;
//   if(current.next === null) { 
//     current.next = _head.next.next;
//     break;
//   }
// }

console.log(getIntersectionNode(headA, headB));
