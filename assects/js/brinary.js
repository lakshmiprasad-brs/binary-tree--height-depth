class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

// Function to calculate the height of a binary tree
const getHeight = function(root) {
    if (!root) return -1; // Base case
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
};

// Function to calculate the depth of a binary tree
const getDepth = function(root) {
    if (!root) return 0; // Base case
    return 1 + Math.max(getDepth(root.left), getDepth(root.right));
};

// Example usage:
// Create a binary tree
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left= new  TreeNode(6);

console.log("Height of the binary tree:", getHeight(tree));
console.log("Depth of the binary tree:", getDepth(tree));   
