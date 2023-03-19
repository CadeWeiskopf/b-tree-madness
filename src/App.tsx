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
          <svg
            className="line"
            viewBox="0 0 50 50"
          >
            <line
              x1="0"
              y1="25"
              x2="25"
              y2="0"
            />
          </svg>
          <Node node={node.left} />
        </div>
      )}
      {node.right && (
        <div style={{ gridArea: "right" }}>
          <svg
            className="line"
            viewBox="0 0 50 50"
          >
            <line
              x1="25"
              y1="0"
              x2="50"
              y2="25"
            />
          </svg>
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
