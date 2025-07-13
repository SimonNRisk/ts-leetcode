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

export const symT = (root) => {
  function dfs(left, right) {
    if (left === null && right === null) {
      return True;
    }
    if (left === null || right === null) {
      return False;
    }
    return (
      left.val === right.val &&
      dfs(left.left, right.right) &&
      dfs(left.right, right.left)
    );
  }
  return dfs(root.left, root.right);
};
