---
title: Custom Nodes
sidebar_position: 1
---

A powerful feature of React Flow is the ability to add custom nodes. Within your custom nodes you can render everything you want. You can define multiple input and output handles and render form inputs or charts for example. In this section we will implement a node with an input field that updates some text in another part of the application.

## Implementing the Custom Node

A custom node is a React component that is wrapped to provide basic functionality like selecting or dragging. From the wrapper component we are passing props like the position or the data besides [other props](/docs/api/nodes/custom-nodes#prop-types). Let's start to implement the `TextUpdaterNode`:

```jsx
import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const handleStyle = { top: 10 };

function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Right} id="a" />
      <Handle type="source" position={Position.Right} id="b" style={handleStyle} />
    </>
  );
}
```

We are importing the `Handle` component and use it as

## Adding the Node Type

You can add a new node type to React Flow by adding it to the `nodeTypes`. It's important that the `nodeTypes` you pass is memoized or defined outside of the component. Otherwise React creates a new object on every render which leads to performance issues and bugs.

```jsx
const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

return <ReactFlow nodeTypes={nodeTypes} />;
```

After defining your new node type, you can use it by using the `type` node option:

```js
const nodes = [
  { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
];
```

After putting all together and adding some basic styles we get a custom node that prints text to the console:

import CodeViewer from '/src/components/CodeViewer';
const editorOptions = { editorHeight: 500, editorWidthPercentage: 45, wrapContent: true }

<CodeViewer codePath="api-flows/CustomNode" applyStyles={false} options={editorOptions} additionalFiles={['TextUpdaterNode.js', 'text-updater-node.css']} />

## Using Multiple Handles

As you can see we added two source handles to the node so that it has two outputs. If you want to connect other nodes with these specific handles the node id is not enough anymore but you also need to pass the specific handle id. In this case one handle has the id `"a"` and the other one `"b"`. Handle specific edges use the `sourceHandle` or `targetHandle` options:

```js
const initialEdges = [
  { id: 'edge-1', source: 'node-1', sourceHandle: 'a', target: 'node-2' },
  { id: 'edge-2', source: 'node-1', sourceHandle: 'b', target: 'node-3' },
];
```

In this case the source node is `node-1` for both handles but the handle ids are different. One comes from handle id `"a"` and the other one from `"b"`. Both go edges have also different target nodes:

<CodeViewer codePath="api-flows/CustomNode2" applyStyles={false} options={editorOptions} additionalFiles={['TextUpdaterNode.js', 'text-updater-node.css']} />

From here you should be able to build your custom nodes. In most cases we recommend to only use custom nodes. The built-ones are just basic examples. You can find a list of the passed props and more information in the [custom node API section](/docs/api/nodes/custom-nodes).
