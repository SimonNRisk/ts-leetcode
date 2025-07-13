//recursion generally better for path finding related things
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

export const maxPathSum = (root) => {
  if (root === null) {
    return -Infinity;
  }
  if (root.left === null && root.right === null) {
    return root.val;
  }
  const leftSum = maxPathSum(root.left);
  const rightSum = maxPathSum(root.right);
  const maxChild = Math.max(leftSum, rightSum);
  return root.val + maxChild;
};

console.log(maxPathSum(a));
