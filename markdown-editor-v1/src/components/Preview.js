import React from "react";

export default function Preview({ convertedText }) {
  return (
    <div className="preview">
      {Array.isArray(convertedText)
        ? convertedText.map((item) => {
            // console.log(item);
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
