class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;

b.left = d;
b.right = e;
c.right = f;

export const searchVal = (root, target) => {
  if (root === null) {
    return false;
  }
  if (root.val === target) {
    return true;
  }
  return searchVal(root.left, target) || searchVal(root.right, target);
};

console.log(searchVal(a, 7));
console.log(searchVal(a, null));
console.log(searchVal(a, 11));
console.log(searchVal(a, 3));
