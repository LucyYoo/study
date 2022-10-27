class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  //이진트리가 아니라 트리로 변경
  constructor(node) {
    this.root = node;
  }

  // insert(value) {
  //   const newNode = new Node(value);
  //   if (this.root === null) {
  //     this.root = newNode;
  //     return;
  //   }

  //   let currentNode = this.root;
  //   while (currentNode !== null) {
  //     if (currentNode.value < value) {
  //       if (currentNode.right === null) {
  //         currentNode.right = newNode;
  //         break;
  //       }

  //       currentNode = currentNode.right;
  //     } else {
  //       if (currentNode.left === null) {
  //         currentNode.left = newNode;
  //         break;
  //       }
  //       currentNode = currentNode.left;
  //     }
  //   }
  // }

  preOrder() {
    const preOrderArr = [];

    function moveNode(node) {
      if (!node) return;

      preOrderArr.push(node.value);
      moveNode(node.left);
      moveNode(node.right);
    }

    moveNode(this.root);
    console.log(preOrderArr.join(" "));
    return;
  }

  inOrder() {
    const inOrderArr = [];

    function moveNode(node) {
      if (!node) return;

      moveNode(node.left);
      inOrderArr.push(node.value);
      moveNode(node.right);
    }

    moveNode(this.root);
    console.log(inOrderArr.join(" "));
    return;
  }

  postOrder() {
    const postOrderArr = [];

    function moveNode(node) {
      if (!node) return;

      moveNode(node.left);
      moveNode(node.right);
      postOrderArr.push(node.value);
    }

    moveNode(this.root);
    console.log(postOrderArr.join(" "));
    return;
  }
}

const tree = new Tree(new Node(5));

tree.root.right = new Node(7);
tree.root.left = new Node(4);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(8);
// tree.insert(5);
// tree.insert(4);
// tree.insert(7);
// tree.insert(8);
// tree.insert(5);
// tree.insert(6);
// tree.insert(2);
tree.preOrder(); //preOrder : 5,4,2,5,7,6,8
tree.inOrder(); //inOrder: 2,4,5,5,6,7,8
tree.postOrder(); //postOrder: 2,5,4,6,8,7,5
