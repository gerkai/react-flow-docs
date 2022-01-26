import ReactFlow, { ReactFlowProvider, useReactFlow } from 'react-flow-renderer';

import defaultNodes from './nodes.js';
import defaultEdges from './edges.js';

import './button.css';
import { useCallback } from 'react';

const edgeOptions = {
  animated: true,
};

let nodeId = 0;

function Flow() {
  const reactFlowInstance = useReactFlow();
  const onClick = useCallback(() => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: {
        label: `NOde ${id}`,
      },
    };
    reactFlowInstance.addNodes(newNode);
  }, []);

  return (
    <>
      <ReactFlow
        defaultNodes={defaultNodes}
        defaultEdges={defaultEdges}
        defaultEdgeOptions={edgeOptions}
        fitViewOnInit
      />
      <button onClick={onClick} className="btn-add">
        add node
      </button>
    </>
  );
}

export default function () {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
