import { RefObject, useEffect, useRef, useState } from "react";
import "./App.css";

interface Node {
  value: number;
  depth: number;
  isLeft?: boolean;
  isRight?: boolean;
  left?: Node;
  right?: Node;
}

function Node({
  node,
  bTreeLeftRef,
  bTreeRightRef,
}: {
  node: Node;
  bTreeLeftRef: RefObject<HTMLDivElement>;
  bTreeRightRef: RefObject<HTMLDivElement>;
}) {
  useEffect(() => {
    if (node.depth > 0) {
      console.log(bTreeLeftRef.current, bTreeRightRef.current);
      if (bTreeLeftRef.current)
        bTreeLeftRef.current.style.marginLeft = `${-10 * node.depth}px`;
      if (bTreeRightRef.current)
        bTreeRightRef.current.style.marginLeft = `${10 * node.depth}px`;
    }
  }, []);
  return (
    <div
      style={{
        left: node.isRight ? `${10}px` : node.isLeft ? `${-10}px` : "50%",
        top: 50,
        position: "absolute",
      }}
    >
      {node.value}
      {node.depth <= 1 ? (
        <>
          <div
            id="b-tree-left"
            style={{ position: "relative" }}
            ref={bTreeLeftRef}
          >
            {node.left && (
              <Node
                node={node.left}
                bTreeLeftRef={bTreeLeftRef}
                bTreeRightRef={bTreeRightRef}
              />
            )}
          </div>
          <div
            id="b-tree-right"
            style={{ position: "relative" }}
            ref={bTreeRightRef}
          >
            {node.right && (
              <Node
                node={node.right}
                bTreeLeftRef={bTreeLeftRef}
                bTreeRightRef={bTreeRightRef}
              />
            )}
          </div>
        </>
      ) : (
        <>
          {node.left && (
            <Node
              node={node.left}
              bTreeLeftRef={bTreeLeftRef}
              bTreeRightRef={bTreeRightRef}
            />
          )}
          {node.right && (
            <Node
              node={node.right}
              bTreeLeftRef={bTreeLeftRef}
              bTreeRightRef={bTreeRightRef}
            />
          )}
        </>
      )}
    </div>
  );
}

function App() {
  const [nodes, setNodes] = useState<Node[]>([
    {
      value: 4,
      depth: 0,
      left: {
        value: 1,
        depth: 1,
        isLeft: true,
        right: { value: 2, depth: 2, isRight: true },
      },
      right: {
        value: 8,
        depth: 1,
        isRight: true,
        left: { value: 7, depth: 2, isLeft: true },
      },
    },
  ]);
  const bTreeLeftRef = useRef<HTMLDivElement>(null);
  const bTreeRightRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      {nodes.map((node, index) => {
        console.log(node);
        return (
          <Node
            key={`node${index}`}
            node={node}
            bTreeLeftRef={bTreeLeftRef}
            bTreeRightRef={bTreeRightRef}
          />
        );
      })}
    </div>
  );
}

export default App;
