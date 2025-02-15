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
// Assignment-1
function printFamilyTree(node, level = 0) {
    if (node === null) return;
    
    printFamilyTree(node.left, level + 1);
    printFamilyTree(node.right, level + 1);
    console.log("Height of a Binary Tree" + level);
    }
    
    // Print the family tree
    console.log("Family Tree:");
    printFamilyTree(grandparent);