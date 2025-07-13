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

export const leafCount = (root) => {
  if (root == null) {
    return 0;
  } else if (root.right === null && root.left === null) {
    return 1;
  }
  return leafCount(root.left) + leafCount(root.right);
};

console.log(leafCount(a));
