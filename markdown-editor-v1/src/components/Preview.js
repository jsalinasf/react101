import React from "react";

export default function Preview({ convertedText }) {
  return (
    <div>
      <h1>Test</h1>
      {Array.isArray(convertedText)
        ? convertedText.map((item) => {
            console.log(item);
            return React.createElement(
              item.element,
              item.properties,
              item.children
            );
          })
        : null}
    </div>
  );
}
