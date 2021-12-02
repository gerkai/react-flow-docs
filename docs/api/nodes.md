---
title: Node Options
---

You create nodes by adding them to the `elements` array of the `ReactFlow` component.

Node example:

```js
{
  id: '1',
  type: 'input',
  data: { label: 'Node 1' },
  position: { x: 250, y: 5 }
}
```

## Options

- `id`: string _(required)_
- `position`: { x: number, y: number } _(required)_
- `data`: {} _(required if you are using a standard type, otherwise depends on your implementation)_
- `type`: 'input' | 'output' | 'default' or a custom one you implemented
- `style`: css properties
- `className`: additional class name
- `targetPosition`: 'left' | 'right' | 'top' | 'bottom' handle position - default: 'top'
- `sourcePosition`: 'left' | 'right' | 'top' | 'bottom' handle position - default: 'bottom'
- `isHidden`: if `true`, the node will not be rendered
- `draggable`: boolean - if option is not set, the node is draggable (overwrites general `nodesDraggable` option)
- `connectable`: boolean - if option is not set, the node is connectable (overwrites general `nodesConnectable` option)
- `selectable`: boolean - if option is not set, the node is selectable (overwrites general `elementsSelectable` option)
- `dragHandle`: string - selector for specifying an element as a drag handle

## Update Node Options

If you want to update the `data` or `style` attribute of a node it is important that you create a new object to notify react flow about the changes. You can see how to update a node in the [update node example](/examples/update-node/).
