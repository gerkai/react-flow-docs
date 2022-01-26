export function getElements(xElements = 10, yElements = 10) {
  const nodes = [];
  const edges = [];
  let nodeId = 1;
  let recentNodeId = null;

  for (let y = 0; y < yElements; y++) {
    for (let x = 0; x < xElements; x++) {
      const position = { x: x * 100, y: y * 50 };
      const data = { label: `Node ${nodeId}` };
      const node = {
        id: `stress-${nodeId.toString()}`,
        style: { width: 50, fontSize: 11 },
        data,
        position,
      };
      nodes.push(node);

      if (recentNodeId && nodeId <= xElements * yElements) {
        edges.push({
          id: `${x}-${y}`,
          source: `stress-${recentNodeId.toString()}`,
          target: `stress-${nodeId.toString()}`,
        });
      }

      recentNodeId = nodeId;
      nodeId++;
    }
  }

  return { nodes, edges };
}
