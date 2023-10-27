export function processText(value) {
  const lines = value.split(String.fromCharCode(10));
  return lines.map((line) => {
    if (line.startsWith("###")) {
      line = line.slice(3);
      return { element: "h3", properties: { id: line }, children: line };
    } else if (line.startsWith("##")) {
      line = line.slice(2);
      return { element: "h2", properties: { id: line }, children: line };
    } else if (line.startsWith("#")) {
      line = line.slice(1);
      return { element: "h1", properties: { id: line }, children: line };
    } else if (line.startsWith("**") && line.endsWith("**")) {
      line = line.slice(2);
      line = line.slice(0, -2);
      return {
        element: "p",
        properties: {
          id: line,
          style: { fontWeight: 900 },
        },
        children: line,
      };
    } else if (line.startsWith("*") && line.endsWith("*")) {
      line = line.slice(1);
      line = line.slice(0, -1);
      return {
        element: "p",
        properties: {
          id: line,
          style: { fontStyle: "italic" },
        },
        children: line,
      };
    } else {
      return { element: "p", properties: { id: line }, children: line };
    }
  });
}
