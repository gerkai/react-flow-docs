---
title: useNodes
sidebar_position: 2
---

This hook returns the ndes. The component that uses this hook re-renders whenever a node changes.

:::caution

This hook can only be used if the component that uses it, is wrapped with a [`ReactFlowProvider`](/docs/api/react-flow-provider/) or if it's a children of the `<ReactFlow />` component.

:::

### Usage

```javascript
import ReactFlow, { useNodes } from 'react-flow-renderer';

function NodesLogger() {
  const nodes = useNodes();

  useEffect(() => {
    console.log(nodes);
  }, [nodes]);

  return null;
}
```

### Typescript

`useNodes<NodeData = any>(): Node<NodeData>[]`
