const { expect } = require("chai");
const { TreeNode } = require("../problems/01-tree-node.js");
const {
  preOrderArrayIter,
  inOrderArrayIter,
  postOrderArrayIter,
  preOrderArrayRecur,
  inOrderArrayRecur,
  postOrderArrayRecur,
} = require("../problems/02-tree-order.js");
const { dfs } = require("../problems/03-dfs");
const { bfs } = require("../problems/04-bfs");

function constructBalancedTree() {
  let a = new TreeNode("a");
  let b = new TreeNode("b");
  let c = new TreeNode("c");
  let d = new TreeNode("d");
  let e = new TreeNode("e");
  let f = new TreeNode("f");
  let g = new TreeNode("g");

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.left = f;
  c.right = g;

  return a;
}

function constructUnbalancedTree() {
  let h = new TreeNode("h");
  let i = new TreeNode("i");
  let j = new TreeNode("j");
  let k = new TreeNode("k");
  let l = new TreeNode("l");
  let m = new TreeNode("m");

  h.left = i;
  h.right = k;
  i.right = j;
  k.left = l;
  l.right = m;

  return h;
}

describe("TreeNode", () => {
  describe("#constructor()", () => {
    it("should set the `val` property to the given arg", () => {
      let a = new TreeNode("a");
      expect(a.val).to.equal("a");

      let b = new TreeNode("b");
      expect(b.val).to.equal("b");
    });

    it("should initialize `left` and `right` properties to null", () => {
      let a = new TreeNode("a");
      expect(a.left).to.equal(null);
      expect(a.right).to.equal(null);
    });
  });
});

describe("TreeOrder", () => {
  let root;

  beforeEach(() => {
    root = new TreeNode("a");
    let b = new TreeNode("b");
    let c = new TreeNode("c");
    let d = new TreeNode("d");
    let e = new TreeNode("e");
    let f = new TreeNode("f");

    root.left = b;
    root.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
  });

  describe("preOrderArrayIter()", () => {
    context("when given an empty tree", () => {
      it("should return an empty arrayIter", () => {
        expect(preOrderArrayIter(null)).to.eql([]);
      });
    });

    it("should return an arrayIter containing values of the binary tree following In-Order", () => {
      expect(preOrderArrayIter(root)).to.eql(["a", "b", "d", "e", "c", "f"]);
    });
  });

  describe("inOrderArrayIter()", () => {
    context("when given an empty tree", () => {
      it("should return an empty arrayIter", () => {
        expect(inOrderArrayIter(null)).to.eql([]);
      });
    });

    it("should return an arrayIter containing values of the binary tree following In-Order", () => {
      expect(inOrderArrayIter(root)).to.eql(["d", "b", "e", "a", "c", "f"]);
    });
  });

  describe("postOrderArrayIter()", () => {
    context("when given an empty tree", () => {
      it("should return an empty arrayIter", () => {
        expect(postOrderArrayIter(null)).to.eql([]);
      });
    });

    it("should return an arrayIter containing values of the binary tree following Post-Order", () => {
      expect(postOrderArrayIter(root)).to.eql(["d", "e", "b", "f", "c", "a"]);
    });
  });

  describe("preOrderArrayRecur()", () => {
    context("when given an empty tree", () => {
      it("should return an empty arrayRecur", () => {
        expect(preOrderArrayRecur(null)).to.eql([]);
      });
    });

    it("should return an arrayRecur containing values of the binary tree following In-Order", () => {
      expect(preOrderArrayRecur(root)).to.eql(["a", "b", "d", "e", "c", "f"]);
    });
  });

  describe("inOrderArrayRecur()", () => {
    context("when given an empty tree", () => {
      it("should return an empty arrayRecur", () => {
        expect(inOrderArrayRecur(null)).to.eql([]);
      });
    });

    it("should return an arrayRecur containing values of the binary tree following In-Order", () => {
      expect(inOrderArrayRecur(root)).to.eql(["d", "b", "e", "a", "c", "f"]);
    });
  });

  describe("postOrderArrayRecur()", () => {
    context("when given an empty tree", () => {
      it("should return an empty arrayRecur", () => {
        expect(postOrderArrayRecur(null)).to.eql([]);
      });
    });

    it("should return an arrayRecur containing values of the binary tree following Post-Order", () => {
      expect(postOrderArrayRecur(root)).to.eql(["d", "e", "b", "f", "c", "a"]);
    });
  });
});

describe("dfs()", () => {
  context("when given an empty tree", () => {
    it("should return an empty arrayIter", () => {
      expect(dfs(null)).to.eql([]);
    });
  });

  it("should return the values of a tree in dfs order", () => {
    expect(dfs(new TreeNode("a"))).to.eql(["a"]);
    expect(dfs(constructBalancedTree())).to.eql([
      "a",
      "b",
      "d",
      "e",
      "c",
      "f",
      "g",
    ]);
    expect(dfs(constructUnbalancedTree())).to.eql([
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
    ]);
  });
});

describe("bfs()", () => {
  context("when given an empty tree", () => {
    it("should return an empty arrayIter", () => {
      expect(bfs(null)).to.eql([]);
    });
  });

  it("should return the values of a tree in bfs order", () => {
    expect(bfs(new TreeNode("a"))).to.eql(["a"]);
    expect(bfs(constructBalancedTree())).to.eql([
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
    ]);
    expect(bfs(constructUnbalancedTree())).to.eql([
      "h",
      "i",
      "k",
      "j",
      "l",
      "m",
    ]);
  });
});

describe("Leet Code #105", () => {
  it(
    "BONUS: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
  );
});
