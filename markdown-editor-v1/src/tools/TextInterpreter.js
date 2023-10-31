export function processText(value) {
  const lines = value.split(String.fromCharCode(10));
  return lines.map((line) => {
    if (line.startsWith("####")) {
      line = line.slice(4);
      return { element: "h4", properties: {}, children: line };
    } else if (line.startsWith("###")) {
      line = line.slice(3);
      return { element: "h3", properties: {}, children: line };
    } else if (line.startsWith("##")) {
      line = line.slice(2);
      return { element: "h2", properties: {}, children: line };
    } else if (line.startsWith("#")) {
      line = line.slice(1);
      return { element: "h1", properties: {}, children: line };
    } else if (line.startsWith("**") && line.endsWith("**")) {
      line = line.slice(2);
      line = line.slice(0, -2);
      return {
        element: "p",
        properties: {
          style: { fontWeight: 700 },
        },
        children: line,
      };
    } else if (line.startsWith("*") && line.endsWith("*")) {
      line = line.slice(1);
      line = line.slice(0, -1);
      return {
        element: "p",
        properties: {
          style: { fontStyle: "italic" },
        },
        children: line,
      };
    }

    // TODO: Implement markdown for lists
    else {
      return { element: "p", properties: {}, children: line };
    }
  });
}
