import { useEffect, useState } from "react";
import "./App.css";
import defaultTree from "./defaultTree.json";
import { addToTree, newTree } from "./tools/treeHandler";

export interface Node {
  value: number;
  depth: number;
  left?: Node;
  right?: Node;
}

function Node({ node }: { node: Node }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateAreas: `
          ". value ."
          "left . right"
        `,
        gridTemplateColumns: "1fr auto 1fr",
      }}
    >
      <div
        className="node"
        style={{
          gridArea: "value",
          width: "2rem",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {node.value}
      </div>
      {node.left && (
        <div style={{ gridArea: "left" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <svg
              //viewBox={`0 0 100 ${10 * node.depth * 3 || 15}`}
              viewBox="0 0 100 10"
              width="100%"
              height="10%"
            >
              <line
                x1="50%"
                y1="100%"
                x2="100%"
                y2="0"
                stroke="#3f301d"
                strokeWidth="1"
                //strokeWidth={Math.pow(2, node.depth)}
                strokeLinecap="round"
              />
            </svg>
          </div>
          <Node node={node.left} />
        </div>
      )}
      {node.right && (
        <div style={{ gridArea: "right" }}>
          <div
            style={{
              display: "flex",
            }}
          >
            <svg
              viewBox="0 0 100 10"
              //viewBox={`0 0 100 ${10 * node.depth * 3 || 15}`}
              width="100%"
              height="10%"
            >
              <line
                x1="0"
                y1="0"
                x2="50%"
                y2="100%"
                stroke="#3f301d"
                //strokeWidth={Math.pow(2, node.depth)}
                //strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <Node node={node.right} />
        </div>
      )}
    </div>
  );
}

function App() {
  const [tree, setTree] = useState<Node>(defaultTree);
  const [addToValue, setAddToValue] = useState(0);
  return (
    <div className="App">
      <div className="tree">
        <Node node={tree} />
        <div className="tree-controls">
          <div className="tree-control-input-group">
            <input
              type="number"
              placeholder="blank for random"
              onChange={(e) => {
                setAddToValue(parseInt(e.target.value));
              }}
            />
            <button
              type="button"
              onClick={() => {
                const randomNumber =
                  Math.floor(
                    Math.random() *
                      (Number.MAX_SAFE_INTEGER - Number.MIN_SAFE_INTEGER + 1)
                  ) + Number.MIN_SAFE_INTEGER;
                const valueToAdd = addToValue || randomNumber;
                const updateTree = addToTree(tree, valueToAdd);
                console.log(updateTree);
                setTree(updateTree);
                setAddToValue(0);
              }}
            >
              add to treee
            </button>
            <button
              type="button"
              onClick={() => {
                const updateTree = newTree(0);
                setTree(updateTree);
              }}
            >
              new tree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
