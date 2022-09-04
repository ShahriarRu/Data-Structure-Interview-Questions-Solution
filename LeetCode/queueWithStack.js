var MyQueue = function () {
  // take two stacks
  this.stack1 = [];
  this.stack2 = [];
};

MyQueue.prototype.push = function (x) {
  while (this.stack1.length > 0) {
    let digit = this.stack1.pop();
    this.stack2.push(digit);
  }

  this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
  while (this.stack2.length > 0) {
    let digit2 = this.stack2.pop();
    this.stack1.push(digit2);
  }
  console.log("3", this.stack1);
  console.log("4", this.stack2);
  return this.stack1.pop();
};

MyQueue.prototype.peek = function () {
  while (this.stack2.length > 0) {
    let digit2 = this.stack2.pop();
    this.stack1.push(digit2);
  }

  return this.stack1[this.stack1.length - 1];
};

MyQueue.prototype.empty = function () {
  return !this.stack1.length && !this.stack2.length;
};
