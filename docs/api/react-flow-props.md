---
title: Props List
description: This is the list of props you can pass to the ReactFlow component.
sidebar_position: 1
---

import Link from '@docusaurus/Link';
import PropItems from '../../src/components/Docs/PropItems'

This is the list of props you can pass to the `<ReactFlow />` component.

```jsx
import ReactFlow from 'reactflow';
```

#### Typescript

The interface of the ReactFlow Prop types is exported as `ReactFlowProps`. You can use it in your code as follows:

```javascript
import { ReactFlowProps } from 'reactflow';
```

:::caution

When you pass one of these props: `nodeTypes`, `edgeTypes`, `deleteKeyCode` (as an array), `selectionKeyCode` (as an array), `multiselectionKeyCode` (as an array), `snapGrid` or **any event handler**, you need to define it outside of the component or memoize it in order to prevent unnecessary re-renderings and bugs!

:::

import basic from '../../docs-data/react-flow-props/basic';

<PropItems title="Basic Props" props={basic} />

import flowview from '../../docs-data/react-flow-props/flowview';

<PropItems title="Flow View" props={flowview} />

import edgeSpecific from '../../docs-data/react-flow-props/edge-specific';

<PropItems title="Edge Specific Props" props={edgeSpecific} />

### Event Handlers

:::caution

Please wrap all event handlers that you are passing to `<ReactFlow />` with a `useCallback` hook or define it outside of the component.

:::

#### General

| Name                                           | Type       | Default     | Description                                 |
| ---------------------------------------------- | ---------- | ----------- | ------------------------------------------- |
| `onInit(reactFlowInstance: ReactFlowInstance)` | `function` | `undefined` | called as soon as React Flow is initialized |

#### Nodes

| Name                                                                  | Type       | Default     | Description                                             |
| --------------------------------------------------------------------- | ---------- | ----------- | ------------------------------------------------------- |
| `onNodeClick(event: React.MouseEvent, node: Node)`                    | `function` | `undefined` | called when user clicks a node                          |
| `onNodeDragStart(event: React.MouseEvent, node: Node, nodes: Node[])` | `function` | `undefined` | node drag start                                         |
| `onNodeDrag(event: React.MouseEvent, node: Node, nodes: Node[])`      | `function` | `undefined` | node drag                                               |
| `onNodeDragStop(event: React.MouseEvent, node: Node, nodes: Node[])`  | `function` | `undefined` | node drag stop                                          |
| `onNodeMouseEnter(event: React.MouseEvent, node: Node)`               | `function` | `undefined` | node mouse enter                                        |
| `onNodeMouseMove(event: React.MouseEvent, node: Node)`                | `function` | `undefined` | node mouse move                                         |
| `onNodeMouseLeave(event: React.MouseEvent, node: Node)`               | `function` | `undefined` | node mouse leave                                        |
| `onNodeContextMenu(event: React.MouseEvent, node: Node)`              | `function` | `undefined` | node context menu                                       |
| `onNodeDoubleClick(event: React.MouseEvent, node: Node)`              | `function` | `undefined` | node double click                                       |
| `onNodesDelete(nodes)`                                                | `function` | `undefined` | called when nodes get deleted                           |
| `onNodesChange(nodeChanges)`                                          | `function` | `undefined` |  handler for adding interactivity for a controlled flow |

#### Edges

| Name                                                                             | Type       | Default     | Description                                                                                                                          |
| -------------------------------------------------------------------------------- | ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `onEdgeClick(event: React.MouseEvent, edge: Edge)`                               | `function` | `undefined` | called when user clicks an edge                                                                                                      |
| `onEdgeMouseEnter(event: React.MouseEvent, edge: Edge)`                          | `function` | `undefined` | edge mouse enter                                                                                                                     |
| `onEdgeMouseMove(event: React.MouseEvent, edge: Edge)`                           | `function` | `undefined` | edge mouse move                                                                                                                      |
| `onEdgeMouseLeave(event: React.MouseEvent, edge: Edge)`                          | `function` | `undefined` | edge mouse leave                                                                                                                     |
| `onEdgeContextMenu(event: React.MouseEvent, edge: Edge)`                         | `function` | `undefined` | called when user does a right-click on an edge                                                                                       |
| `onEdgeUpdate(oldEdge, newConnection)`                                           | `function` | `undefined` | called when the end of an edge gets dragged to another source or target                                                              |
| `onEdgeUpdateStart(event: React.MouseEvent, edge: Edge, handleType: HandleType)` | `function` | `undefined` | called when user starts to update an edge                                                                                            |
| `onEdgeUpdateEnd(event: MouseEvent, edge: Edge, handleType: HandleType)`         | `function` | `undefined` | called when user ends an edge update (for TS users: this is a normal `MouseEvent` and not a `React.MouseEvent` like the other ones). |
| `onEdgesDelete(edges: Edge[])`                                                   | `function` | `undefined` | called when edges get deleted                                                                                                        |
| `onEdgesChange(edgeChanges)`                                                     | `function` | `undefined` |  handler for adding interactivity for a controlled flow                                                                              |
|                                                                                  |

#### Connections

| Name                                                                                         | Type       | Default     | Description                                                              |
| -------------------------------------------------------------------------------------------- | ---------- | ----------- | ------------------------------------------------------------------------ |
| `onConnect({ source, target }: Connection)`                                                  | `function` | `undefined` | called when user connects two nodes                                      |
| `onConnectStart(event: React.MouseEvent, { nodeId, handleType }: OnConnectStartParams)`      | `function` | `undefined` | called when user starts to drag connection line                          |
| `onConnectEnd(event: React.MouseEvent)`                                                      | `function` | `undefined` | called after user stops or connects nodes (called after `onConnect`)     |
| `onClickConnectStart(event: React.MouseEvent, { nodeId, handleType }: OnConnectStartParams)` | `function` | `undefined` | called when user starts to do a connection by click                      |
| `onClickConnectEnd(event: React.MouseEvent)`                                                 | `function` | `undefined` | called after user stops a connection by click (called after `onConnect`) |

#### Pane

| Name                                                             | Type       | Default     | Description                                                                     |
| ---------------------------------------------------------------- | ---------- | ----------- | ------------------------------------------------------------------------------- |
| `onMove(event: MouseEvent, viewport: Viewport)`                  | `function` | `undefined` | called when user is panning or zooming                                          |
| `onMoveStart(event: MouseEvent, viewport: Viewport)`             | `function` | `undefined` | called when user starts panning or zooming                                      |
| `onMoveEnd(event: MouseEvent, viewport: Viewport)`               | `function` | `undefined` | called when user ends panning or zooming                                        |
| `onSelectionChange({ nodes, edges }: OnSelectionChangeParams)`   | `function` | `undefined` | called when user selects one or multiple elements                               |
| `onSelectionDragStart(event: React.MouseEvent, nodes: Node[])`   | `function` | `undefined` | called when user starts to drag a selection                                     |
| `onSelectionDrag(event: React.MouseEvent, nodes: Node[])`        | `function` | `undefined` | called when user drags a selection                                              |
| `onSelectionDragStop(event: React.MouseEvent, nodes: Node[])`    | `function` | `undefined` | called when user stops to drag a selection                                      |
| `onSelectionContextMenu(event: React.MouseEvent, nodes: Node[])` | `function` | `undefined` | called when user does a right-click on a selection                              |
| `onPaneClick(event: React.MouseEvent)`                           | `function` | `undefined` | called when user clicks directly on the canvas                                  |
| `onPaneMouseEnter(event: React.MouseEvent)`                      | `function` | `undefined` | called when user enters the canvas with the mouse                               |
| `onPaneMouseMove(event: React.MouseEvent)`                       | `function` | `undefined` | called when user clicks directly on the canvas                                  |
| `onPaneMouseLeave(event: React.MouseEvent)`                      | `function` | `undefined` | called when user clicks leaves the canvas with the mouse                        |
| `onPaneContextMenu(event: React.MouseEvent)`                     | `function` | `undefined` | called when user does a right-click on the canvas                               |
| `onPaneScroll(event: React.MouseEvent)`                          | `function` | `undefined` | called when user scrolls pane (only works when `zoomOnScroll` is set to `false) |

### Interaction

| Name                  | Type                                     | Default     | Description                                                                                                                              |
| --------------------- | ---------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `nodesDraggable`      | `boolean`                                | `true`      | This applies to all nodes. You can also change the behavior of a specific node with the `draggable` node option                          |
| `nodesConnectable`    | `boolean`                                | `true`      | This applies to all nodes. You can also change the behavior of a specific node with the `connectable` node optionstart                   |
| `elementsSelectable`  | `boolean`                                | `true`      | This applies to all nodes and edges. You can also change the behavior of a specific node with the `selectable` node option. drag         |
| `panOnDrag`           | `boolean`                                | `true`      | enables pan on drag                                                                                                                      |
| `panOnScroll`         | `boolean`                                | `false`     | Move the graph while keeping the zoomlevel using mousewheel or trackpad. Overwrites `zoomOnScroll` enter                                 |
| `panOnScrollSpeed`    | `number`                                 | `undefined` | Controls how fast the canvas is moved while using the mousewheel. Only has an effect if `panOnScroll` is enabled                         |
| `panOnScrollMode`     | `'free'`, `'vertical'` or `'horizontal'` | `'free'`    | Enables certain scroll directions                                                                                                        |
| `zoomOnScroll`        | `boolean`                                | `true`      | Zoom the graph in and out using the mousewheel or trackpad                                                                               |
| `zoomOnPinch`         | `boolean`                                | `true`      | Zoom the graph in and out using pinch                                                                                                    |
| `zoomOnDoubleClick`   | `boolean`                                | `true`      | Enables zoom on double click                                                                                                             |
| `selectNodesOnDrag`   | `boolean`                                | `true`      | Enables to select nodes on drag                                                                                                          |
| `connectOnClick`      | `boolean`                                | `true`      | Enables to create connections on touch devices and via mouse click                                                                       |
| `connectionMode`      | `'strict'` or `'loose'`                  | `'strict'`  | `'strict'` (only source to target connections are possible) or `'loose'` (source to source and target to target connections are allowed) |
| `disableKeyboardA11y` | `boolean`                                | `false`     | With this prop you can disable the keyboard accessibility features.                                                                      |

### Connection Line Options

| Name                          | Type              | Default     | Description                                                                     |
| ----------------------------- | ----------------- | ----------- | ------------------------------------------------------------------------------- |
| `connectionLineType`          | `string`          | `undefined` | called when user clicks a node                                                  |
| `connectionLineStyle`         | `CSSProperties`   | `undefined` | connection style as SVG attributes                                              |
| `connectionLineComponent`     | `React component` | `undefined` | [custom connection line component](/docs/examples/edges/custom-connectionline/) |
| `connectionLineWrapperStyles` | `CSSProperties`   | `undefined` | styles for the connection line SVG wrapper                                      |

### Keys

| Name                    | Type                             | Default       | Description                                                                                                                                                            |
| ----------------------- | -------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deleteKeyCode`         | `string` or `string[]` or `null` | `'Backspace'` | Key(s) that trigger a remove handler (when you pass an array, memoize or define it outside the component). You can set it to `null` to disable functionality.          |
| `selectionKeyCode`      | `string` or `string[]` or `null` | `'Shift'`     | While pressing the selectionKeyCode and dragging the mouse you can create a selection for multiple nodes and edges. You can set it to `null` to disable functionality. |
| `multiSelectionKeyCode` | `string` or `string[]` or `null` | `'Meta'`      | While pressing the multiSelectionKeyCode you can select multiple nodes and edges with a click. You can set it to `null` to disable functionality.                      |
| `zoomActivationKeyCode` | `string` or `string[]` or `null` | `'Meta'`      | While pressing the zoomActivationKeyCode you can zoom even if `panOnScroll=true` or `zoomOnScroll=false`. You can set it to `null` to disable functionality.           |

### Pro

:::info
If you are here because of the attribution, please refer to our [Remove Attribution](/docs/guides/remove-attribution) guide.
:::

| Name                         | Type      | Default     | Description                                                                                                                                                      |
| ---------------------------- | --------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `proOptions`                 | `object`  | `undefined` | this object contains options that are only intended for our pro subscribers                                                                                      |
| `proOptions.hideAttribution` | `boolean` | `false`     | set this to true to remove the attribution from the React Flow renderer. Please read our [Attribution Guide](/docs/guides/remove-attribution) before doing that. |
