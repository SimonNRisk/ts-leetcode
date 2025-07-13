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

export const treeIncludes = (root, target) => {
  if (!root) {
    return false;
  }
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === target) {
      return true;
    }
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return false;
};

console.log(treeIncludes(null, "B"));
console.log(treeIncludes(a, "A"));
console.log(treeIncludes(a, "F"));
console.log(treeIncludes(a, "E"));
console.log(treeIncludes(a, "Z"));
