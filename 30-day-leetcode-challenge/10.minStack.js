/**
  Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

  push(x) -- Push element x onto stack.
  pop() -- Removes the element on top of the stack.
  top() -- Get the top element.
  getMin() -- Retrieve the minimum element in the stack.
 */
class MinStack { 
  constructor(v) { 
    this.stack = [];
  }

  push(v) { 
    this.stack.unshift(v);
  }

  pop() { 
    this.stack.shift();
  }

  top() { 
    return this.stack[0];
  }

  getMin() { 
    return Math.min(...this.stack);
  }
}