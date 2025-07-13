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

export const sameTree = (p, q) => {
  if (p === null && q === null) {
    return true;
  }
  if ((p === null && q !== null) || (p !== null && q === null)) {
    return false;
  }

  return (
    p.val === q.val && sameTree(p.left, q.left) && sameTree(p.right, q.right)
  );
};
