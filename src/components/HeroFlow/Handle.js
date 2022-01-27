import React from 'react';
import { Handle as RfHandle } from 'react-flow-renderer';

const defaultStyle = {
  width: 10,
  height: 10,
};

export default function Handle({ style, ...props }) {
  return <RfHandle style={{ ...defaultStyle, ...style }} {...props} />;
}
