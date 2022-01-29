---
title: Controls
sidebar_position: 2
---

The control panel contains a zoom-in, zoom-out, fit-view and a lock/unlock button. You can use it by passing it as a children to the `ReactFlow` component:

### Usage

```jsx
import ReactFlow, { Controls } from 'react-flow-renderer';

function FlowWithControls() {
  return (
    <ReactFlow nodes={[]} edges={[]}>
      <Controls />
    </ReactFlow>
  );
}
```

### Prop Types

- `showZoom`: boolean - default: true
- `showFitView`: boolean - default: true
- `showInteractive`: boolean - default: true
- `style`: css properties
- `className`: additional class name
- `onZoomIn`: callback function that gets triggered when the zoom in button is pressed
- `onZoomOut`: callback function that gets triggered when the zoom out button is pressed
- `onFitView`: callback function that gets triggered when the fit-to-view button is pressed
- `onInteractiveChange`: callback function that gets triggered when the lock button is pressed - passes the new value

**Typescript:** The interface of the Controls Prop Types are exported as `ControlProps`.

## Extended Controls

You can add buttons to the control panel by using the `ControlButton` component and pass it as a children to the `Controls` component:

```jsx
import { Controls, ControlButton } from 'react-flow-renderer';

function CustomControls() {
  return (
    <Controls>
      <ControlButton onClick={() => console.log('action')}>
        <FancyIcon />
      </ControlButton>
      <ControlButton onClick={() => console.log('another action')}>
        <AnotherFancyIcon />
      </ControlButton>
    </Controls>
  );
}
```

### ControlButton Prop Types

All props get forwarded to the `ControlButton` component.
