---
title: <Controls />
sidebar_position: 2
---

The controls plugin contains a panel with a zoom-in, zoom-out, fit-view and a lock/unlock button. You can use it by passing it as a children to the `ReactFlow` component.

### Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install @react-flow/controls
```

  </TabItem>
  <TabItem value="yarn" label="Yarn">

```bash
yarn add @react-flow/controls
```

  </TabItem>
</Tabs>

### Usage

```jsx
import ReactFlow from '@react-flow/core';
import Controls from '@react-flow/controls';

function FlowWithControls() {
  return (
    <ReactFlow nodes={[]} edges={[]}>
      <Controls />
    </ReactFlow>
  );
}
```

### Prop Types

| Name                                 | Type            | Default     | Description                                    |
| ------------------------------------ | --------------- | ----------- | ---------------------------------------------- |
| `showZoom`                           | `boolean`       | `true`      | Display zoom button                            |
| `showFitView`                        | `boolean`       | `true`      | Display fit view button                        |
| `showInteractive`                    | `boolean`       | `true`      | Display interactive button                     |
| `onZoomIn`                           | `function`      | `undefined` | callback when the zoom-in button gets pressed  |
| `onZoomOut`                          | `function`      | `undefined` | callback when the zoom-out button gets pressed |
| `onFitView`                          | `function`      | `undefined` | callback when the fit-view button gets pressed |
| `onInteractiveChange(isInteractive)` | `function`      | `undefined` | callback when the lock button is pressed       |
| `style`                              | `CSSProperties` | `undefined` | Controls style attributes                      |
| `className`                          | `string`        | `undefined` | Additional class name                          |

- **Typescript:** The interface of the Controls Prop Types are exported as`ControlProps`.

## Extended Controls

You can add buttons to the control panel by using the `ControlButton` component and pass it as a children to the `Controls` component:

```jsx
import Controls, { ControlButton } from '@react-flow/controls';

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
