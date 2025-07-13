//breadth uses queue where depth uses stack
//queue has sense of direction: LIFO (like a line in grocery store)
//if you dont use eprfect queue may have worst time compleixty
//O(n) assumes we have O(1) add and remove
//stack has O(1) add and remove
//index 0 is front, index last is back

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");

a.left = b;
a.right = c;

b.left = d;
b.right = e;
c.right = f;

export const breadthFirstValues = (root) => {
  if (root === null) {
    return [];
  }
  //use array for queue
  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.val);

    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  return result;
};

console.log(breadthFirstValues(a));
