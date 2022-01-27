---
title: MiniMap
sidebar_position: 4
---

You can use the mini map plugin by passing it as a children to the `ReactFlow` component:

### Usage

```jsx
import ReactFlow, { MiniMap } from 'react-flow-renderer';

const nodeColor = (node) => {
  switch (node.type) {
    case 'input':
      return 'red';
    case 'default':
      return '#00ff00';
    case 'output':
      return 'rgb(0,0,255)';
    default:
      return '#eee';
  }
};

function FlowWithMiniMap() {
  return (
    <ReactFlow defaultNodes={[]}>
      <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} />
    </ReactFlow>
  );
}
```

### Prop Types

- `nodeColor`: string or function - If you pass a color as a string all nodes will get that color. If you pass a function you can return a color depending on the passed node.
- `nodeBorderRadius`: number
- `nodeStrokeWidth`: number
- `nodeClassName`: string or function for adding an additional class to the nodes inside the mini map
- `maskColor`: string
- `style`: css properties
- `className`: additional class name

**Typescript:** The interface of the MiniMap Prop Types are exported as `MiniMapProps`.
