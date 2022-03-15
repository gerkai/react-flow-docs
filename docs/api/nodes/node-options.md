---
title: Node Options
sidebar_position: 1
---

You create nodes by adding them to the `nodes` or `defaultNodes` array of the `ReactFlow` component.

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

| Name                      | Type                                                     | Description                                                                                            |
| ------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `id` **(required)**       | `string`                                                 | Unique identifier                                                                                      |
| `position` **(required)** | `{ x: number, y: number }`                               | For child nodes this position is relative to their parent                                              |
| `data` **(required)**     | `object`                                                 |                                                                                                        |
| `type`                    | `'input'`, `'output'` or `'default'` + your custom types | Defines the node type                                                                                  |
| `targetPosition`          | `'left'`, `'right'`, `'top'` or `'bottom'`               | Target position is `'top'` by default                                                                  |
| `sourcePosition`          | `'left'`, `'right'`, `'top'` or `'bottom'`               | Source position is `'bottom'` by default                                                               |
| `parentNode`              | `string`                                                 | Node od of the parent node                                                                             |
| `expandParent`            | `boolean`                                                | If this is true the parent node gets expanded when you drag the child to the outer bounds              |
| `extent`                  | `[number, number, number, number]` or `'parent'`         | The moving range for a node. If it's a child that shouln't leave the parent node, set it to `'parent'` |
| `hidden`                  | `boolean`                                                | If `true`, the node will not be rendered                                                               |
| `draggable`               | `boolean`                                                | If option is not set, the node is draggable (overwrites general `nodesDraggable` option)               |
| `connectable`             | `boolean`                                                | If option is not set, the node is connectable (overwrites general `nodesConnectable` option)           |
| `selectable`              | `boolean`                                                | If option is not set, the node is selectable (overwrites general `elementsSelectable` option)          |
| `dragHandle`              | `string`                                                 | Selector for specifying an element as a drag handle                                                    |
| `style`                   | `CSSProperties`                                          |                                                                                                        |
| `className`               | `string`                                                 |                                                                                                        |

## Update Node Options

If you want to update the `data` or `style` attribute of a node it is important that you create a new object to notify react flow about the changes. You can see how to update a node in the [update node example](/docs/examples/update-node/).
