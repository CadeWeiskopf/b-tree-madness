import { useState } from "react";
import "./App.css";

interface Node {
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
        style={{
          gridArea: "value",
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
              viewBox="0 0 100 10"
              width="100%"
              height="10%"
            >
              <line
                x1="50%"
                y1="100%"
                x2="100%"
                y2="0"
                stroke="white"
                strokeWidth={Math.pow(2, node.depth)}
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
              width="100%"
              height="10%"
            >
              <line
                x1="0"
                y1="0"
                x2="50%"
                y2="100%"
                stroke="white"
                strokeWidth={Math.pow(2, node.depth)}
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
  const [tree, setTree] = useState<Node>({
    depth: 0,
    value: 4,
    left: {
      depth: 1,
      value: 1,
      left: {
        depth: 2,
        value: -3,
        right: {
          depth: 3,
          value: -1,
        },
      },
      right: {
        depth: 2,
        value: 3,
        left: {
          depth: 3,
          value: 2,
        },
      },
    },
    right: {
      depth: 1,
      value: 8,
      left: {
        depth: 2,
        value: 7,
        left: {
          depth: 3,
          value: 6,
          left: { depth: 4, value: 5 },
        },
      },
      right: {
        depth: 2,
        value: 9,
        right: {
          depth: 3,
          value: 10,
          right: {
            depth: 4,
            value: 11,
          },
        },
      },
    },
  });

  return (
    <div className="App">
      <div className="tree">
        <Node node={tree} />
      </div>
    </div>
  );
}

export default App;
