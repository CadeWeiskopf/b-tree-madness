import { Node } from "../App";

export const newTree: (rootValue: number) => Node = (rootValue) => {
  return {
    depth: 0,
    value: rootValue,
  };
};

export const addToTree: (tree: Node, valueToAdd: number) => Node = (
  tree,
  valueToAdd
) => {
  console.log("add", valueToAdd);
  let node = tree; // starts at root
  let depth = 0;
  while (true) {
    if (node.value === valueToAdd) {
      break;
    }
    if (node.value < valueToAdd) {
      if (node.right) {
        node = node.right;
        depth++;
        continue;
      }
      node.right = {
        depth,
        value: valueToAdd,
      };
      console.log("added right");
      break;
    }
    if (node.value > valueToAdd) {
      if (node.left) {
        node = node.left;
        depth++;
        continue;
      }
      node.left = {
        depth,
        value: valueToAdd,
      };
      console.log("added left");
      break;
    }
  }
  return tree;
};
