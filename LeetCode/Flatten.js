var flatten = function (head) {
  if (!head) return head;
  let cur = head,
    tail = head;
  let stack = [];
  while (cur !== null) {
    if (cur.child !== null) {
      let child = cur.child;
      if (cur.next !== null) {
        stack.push(cur.next);
        cur.next.prev = null;
      }
      cur.next = child;
      child.prev = cur;
      cur.child = null;
    }
    tail = cur;
    cur = cur.next;
  }
  while (stack.length > 0) {
    cur = stack.pop();
    tail.next = cur;
    cur.prev = tail;
    while (cur !== null) {
      tail = cur;
      cur = cur.next;
    }
  }
  return head;
};
