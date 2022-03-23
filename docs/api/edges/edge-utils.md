---
title: Edge Utils
sidebar_position: 5
---

There are several utils that help you to create a custom edge. Some are used in the [edges example](/docs/examples/edges).

### `getBezierPath`

Returns the path of a bezier edge.

```
import { getBezierPath } from 'react-flow-renderer';

getBezierPath({
  sourceX,
  sourceY,
  sourcePosition = Position.Bottom, // optional
  targetX,
  targetY,
  targetPosition = Position.Top, // optional
  centerX, // optional
  centerY, // optional
}: GetBezierPathParams): string
```

### `getSmoothStepPath`

Returns the path of a smooth step edge. You can set `borderRadius` = `0` to get a step edge path.

```
import { getSmoothStepPath } from 'react-flow-renderer';

getSmoothStepPath({
  sourceX,
  sourceY,
  sourcePosition = Position.Bottom, // optional
  targetX,
  targetY,
  targetPosition = Position.Top, // optional
  borderRadius = 5, // optional
  centerX, // optional
  centerY, // optional
}: GetSmoothStepPathParams): string
```

### `getSimpleBezierPath`

Returns the path of a simple bezier edge.

```
import { getSimpleBezierPath } from 'react-flow-renderer';

getSimpleBezierPath({
  sourceX,
  sourceY,
  sourcePosition = Position.Bottom, // optional
  targetX,
  targetY,
  targetPosition = Position.Top, // optional
  centerX, // optional
  centerY, // optional
}: GetBezierPathParams): string
```

### `getEdgeCenter`

Returns the center position and offset `[centerX, centerY, offsetX, offsetY]` of the edge.

```
import { getEdgeCenter } from 'react-flow-renderer';

getEdgeCenter({
  sourceX,
  sourceY,
  targetX,
  targetY
}: GetCenterParams): [number, number, number, number]
```

### `getBezierEdgeCenter`

Returns the center position and offset `[centerX, centerY, offsetX, offsetY]` of a bezier edge.

```
import { getBezierEdgeCenter } from 'react-flow-renderer';

getBezierEdgeCenter({
  sourceX,
  sourceY,
  sourcePosition = Position.Bottom,
  targetX,
  targetY,
  targetPosition = Position.Top,
  curvature = 0.25,
}: GetCenterParams): [number, number, number, number]
```

### `getSimpleBezierEdgeCenter`

Returns the center position and offset `[centerX, centerY, offsetX, offsetY]` of a `simplebezier` edge.

```
import { getSimpleBezierEdgeCenter } from 'react-flow-renderer';

getSimpleBezierEdgeCenter({
  sourceX,
  sourceY,
  sourcePosition = Position.Bottom,
  targetX,
  targetY,
  targetPosition = Position.Top,
}: GetCenterParams): [number, number, number, number]
```

### `getMarkerEnd`

Returns the marker end url for displaying the arrow head.

```
import { getMarkerEnd } from 'react-flow-renderer';

getMarkerEnd(arrowHeadType?: ArrowHeadType, markerEndId?: string): string
```
