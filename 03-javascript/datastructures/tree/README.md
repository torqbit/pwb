# Binary Tree in JavaScript

A binary tree is a hierarchical data structure where each node has at most two children, referred to as left and right child nodes. Here's a practical example:

## The Family Tree Example 👨‍👩‍👧‍👦

Imagine organizing a family tree where each person (node) can have up to two children. Let's implement this using JavaScript:

```javascript
// Node class to represent each family member
class TreeNode {
  constructor(name) {
    this.name = name;
    this.left = null; // Left child
    this.right = null; // Right child
  }
}

// Create a family tree
const grandparent = new TreeNode("John");
const parent1 = new TreeNode("Mike");
const parent2 = new TreeNode("Sarah");
const child1 = new TreeNode("Tom");
const child2 = new TreeNode("Emily");
const child3 = new TreeNode("David");

// Connect family members
grandparent.left = parent1; // John's first child
grandparent.right = parent2; // John's second child
parent1.left = child1; // Mike's first child
parent1.right = child2; // Mike's second child
parent2.left = child3; // Sarah's first child

// Function to traverse and print family members
function printFamilyTree(node, level = 0) {
  if (node === null) return;

  console.log("  ".repeat(level) + node.name);
  printFamilyTree(node.left, level + 1);
  printFamilyTree(node.right, level + 1);
}

// Print the family tree
console.log("Family Tree:");
printFamilyTree(grandparent);
```

This will output:

```
Family Tree:
John
  Mike
    Tom
    Emily
  Sarah
    David
```

In this example:

- Each person is a node in the tree
- The left and right properties represent their children
- The printFamilyTree function uses recursion to display the hierarchy
- The indentation shows the relationship levels
  This structure allows us to:

1. Easily traverse through family relationships
2. Find relationships between family members
3. Add new family members in their proper place
4. Maintain a clear hierarchical structure
   Binary trees are fundamental in computer science and are used in many applications, from organizing data to implementing decision trees and parsing expressions.

## Practice Assignments 🎯

### Assignment 1: Tree Height Calculator

**Difficulty: Easy**

**Objective:** Create a function to calculate the height of a binary tree.

**Instructions:**

- Implement a function `getTreeHeight(root)` that takes the root node as input
- Return the maximum height (depth) of the tree
- Return 0 for an empty tree

### Assignment 2: Node Counter

**Difficulty: Easy**

**Objective:** Count the total number of nodes in a binary tree.

**Instructions:**

- Create a function `countNodes(root)` that takes the root node as input
- Count and return the total number of nodes in the tree
- Include both leaf nodes and internal nodes in the count

### Assignment 3: Leaf Node Finder

**Difficulty: Medium**

**Objective:** Find and print all leaf nodes in a binary tree.

**Instructions:**

- Implement a function `findLeafNodes(root)` that takes the root node as input
- Return an array containing all leaf nodes (nodes with no children)
- Maintain the order of leaves from left to right

### Assignment 4: Level Order Traversal

**Difficulty: Medium**

**Objective:** Print nodes level by level, from top to bottom.

**Instructions:**

- Create a function `levelOrderTraversal(root)` that takes the root node as input
- Print nodes at each level on a new line
- Use a queue to manage the level-by-level traversal

### Assignment 5: Tree Mirror

**Difficulty: Medium**

**Objective:** Create a mirror image of a binary tree.

**Instructions:**

- Implement a function `mirrorTree(root)` that takes the root node as input
- Swap left and right children of all nodes
- Return the root node of the mirrored tree
- The original tree structure should be modified in place

Each assignment builds upon the basic binary tree concepts and helps understand different tree operations and traversal techniques.
