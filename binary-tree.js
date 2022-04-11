/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function countDepth(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return countDepth(node.right) + 1;
      if (node.right === null) return countDepth(node.left) + 1;

      return (
        Math.min(countDepth(node.left), countDepth(node.right)) + 1
        );
    }
    return (countDepth(this.root));
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function countDepth(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return countDepth(node.right) + 1;
      if (node.right === null) return countDepth(node.left) + 1;

      return (
        Math.max(countDepth(node.left), countDepth(node.right)) + 1
        );
    }
    return (countDepth(this.root));
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let total = 0;

    function findMax(node) {
      if (node === null) return 0;
      const leftSum = findMax(node.left);
      const rightSum = findMax(node.right);
      total = Math.max(total, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    findMax(this.root);
    return total;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let result = this.root.val > lowerBound ? this.root.val : null;

    function findResult(node) {
      if (node === null) return null;

      const currLeft = findResult(node.left);
      const currRight = findResult(node.right);
      if (node.val > lowerBound && node.val < result) {
        result = node.val;
        return result;
      }
      return Math.min(result, currLeft, currRight);

    }
    findResult(this.root);
    return result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have differentnodes. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
