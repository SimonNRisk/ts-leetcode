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

//DFT: a, b, d, e, c, f
//stack: FIFO (add to top, remove from top)
//push right child first so left child (which we visit first) is top of stack

export const depthFirstTraversal = (root) => {
  if (root === null) {
    return [];
  }
  const stack = [root]; //just an array as long as we use push and pop
  const result = [];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);

    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return result;
};

console.log(depthFirstTraversal(a));

export const depthFirstTraversalR = (root) => {
  if (root === null) {
    return [];
  }
  const leftVals = depthFirstTraversalR(root.left); //[b, d, e]
  const rightVals = depthFirstTraversalR(root.right); //[c, f]
  return [root.val, ...leftVals, ...rightVals];
};

console.log(depthFirstTraversalR(a));

//reminder of spread:
const peeps = ["Filipe", "Jason", "Raj", "John"];
const newPeeps = ["Alvin", ...peeps, "Ryan"];
console.log(newPeeps);
