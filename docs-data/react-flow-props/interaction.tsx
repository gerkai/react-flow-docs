import React from 'react';

const props = [
  {
    name: 'nodesDraggable',
    type: 'boolean',
    default: 'true',
    description: (
      <>
        This applies to all nodes. You can also change the behavior of a specific node with the{' '}
        <code>draggable</code> node option
      </>
    ),
  },
  {
    name: 'nodesConnectable',
    type: 'boolean',
    default: 'true',
    description: (
      <>
        This applies to all nodes. You can also change the behavior of a specific node with the{' '}
        <code>connectable</code> node optionstart
      </>
    ),
  },
  {
    name: 'elementsSelectable',
    type: 'boolean',
    default: 'true',
    description: (
      <>
        This applies to all nodes and edges. You can also change the behavior of a specific node
        with the <code>selectable</code> node option.
      </>
    ),
  },
  {
    name: 'panOnDrag',
    type: 'boolean',
    default: 'true',
    description: 'enables pan on drag',
  },
  {
    name: 'panOnScroll',
    type: 'boolean',
    default: 'false',
    description: (
      <>
        Move the graph while keeping the zoomlevel using mousewheel or trackpad. Overwrites
        <code>zoomOnScroll</code> option.
      </>
    ),
  },
  {
    name: 'panOnScrollSpeed',
    type: 'number',
    default: 'undefined',
    description: (
      <>
        Controls how fast the canvas is moved while using the mousewheel. Only has an effect if{' '}
        <code>panOnScroll</code> is enabled
      </>
    ),
  },
  {
    name: 'panOnScrollMode',
    type: "'free', 'vertical' or 'horizontal'",
    default: "'free'",
    description: 'Enables certain scroll directions',
  },
  {
    name: 'zoomOnScroll',
    type: 'boolean',
    default: 'true',
    description: 'Zoom the graph in and out using the mousewheel or trackpad',
  },
  {
    name: 'zoomOnPinch',
    type: 'boolean',
    default: 'true',
    description: 'Zoom the graph in and out using pinch',
  },
  {
    name: 'zoomOnDoubleClick',
    type: 'boolean',
    default: 'true',
    description: 'Enables zoom on double click',
  },
  {
    name: 'selectNodesOnDrag',
    type: 'boolean',
    default: 'true',
    description: 'Enables to select nodes on drag',
  },
  {
    name: 'connectOnClick',
    type: 'boolean',
    default: 'true',
    description: 'Enables to create connections on touch devices and via mouse click',
  },
  {
    name: 'connectionMode',
    type: "'strict' or 'loose'",
    default: "'strict'",
    description: (
      <>
        <code>'strict'</code> (only source to target connections are possible) or{' '}
        <code>'loose'</code> (source to source and target to target connections are allowed)
      </>
    ),
  },
  {
    name: 'disableKeyboardA11y',
    type: 'boolean',
    default: 'false',
    description: 'With this prop you can disable the keyboard accessibility features',
  },
];

export default props;
