import { useState } from "react";
import "./App.css";

interface Node {
  value: number;
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
        gap: "8px",
      }}
    >
      <div style={{ gridArea: "value" }}>{node.value}</div>
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
              height="1%"
            >
              <line
                x1="50%"
                y1="5"
                x2="100%"
                y2="5"
                stroke="white"
                strokeWidth="2"
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
              height="1%"
            >
              <line
                x1="0"
                y1="5"
                x2="50%"
                y2="5"
                stroke="white"
                strokeWidth="2"
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
    value: 4,
    left: {
      value: 1,
      left: { value: -3, right: { value: -1 } },
      right: { value: 3, left: { value: 2 }, right: { value: 4 } },
    },
    right: {
      value: 8,
      left: { value: 7, left: { value: 6 } },
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
