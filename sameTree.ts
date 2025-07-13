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

export const dft = (root: Node | null): string[] => {
  if (root === null) {
    return [];
  }
  const leftVals = dft(root.left);
  const rightVals = dft(root.right);
  return [root.val, ...leftVals, ...rightVals];
};

export const sameTree = (p: Node, q: Node) => {
  return dft(p) === dft(q);
};
