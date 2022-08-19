var deleteMiddle = function (head) {
  let curr = head;
  let l = 1;
  while (curr.next) {
    l++;
    curr = curr.next;
  }
  var middle = Math.floor(l / 2);
  if (middle == 0) {
    head = head.next;
    return head;
  }
  var temp = head;
  for (let i = 0; i < middle; i++) {
    var prev = temp;
    if (temp.next) {
      temp = temp.next;
    }
  }
  prev.next = temp.next;
  return head;
};
