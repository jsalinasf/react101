import React from "react";

export default function Preview({ convertedText }) {
  return (
    <div className="preview">
      <textarea value={convertedText} disabled={true}></textarea>
    </div>
  );
}
