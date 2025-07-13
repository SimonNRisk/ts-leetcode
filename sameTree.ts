class Node {
  val: string;
  left: Node | null;
  right: Node | null;
  constructor(val: string) {
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

export const sameTree = (p: Node | null, q: Node | null): boolean => {
  if (p === null && q === null) {
    return true;
  }
  if ((p === null && q !== null) || (p !== null && q === null)) {
    return false;
  }
  if (p?.val !== q?.val) {
    return false;
  }
  return sameTree(p!.left, q!.left) && sameTree(p!.right, q!.right);
};
