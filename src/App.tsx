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
          <Node node={node.left} />
        </div>
      )}
      {node.right && (
        <div style={{ gridArea: "right" }}>
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
      right: { value: 2, right: { value: 3 } },
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
