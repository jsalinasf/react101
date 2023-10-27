import React from "react";

export default function Editor({
  editorText,
  setEditorText,
  setConvertedText,
}) {
  function processText(value) {
    const lines = value.split(String.fromCharCode(10));
    return lines.map((line) => {
      if (line.startsWith("#")) {
        line = line.slice(1);
        return `<h1>${line}</h1>`;
      } else {
        return line;
      }
    });
  }

  function handleTextareaChange(event) {
    setEditorText(event.target.value);
    setConvertedText(processText(event.target.value));
  }

  return (
    <div className="editor">
      <textarea
        placeholder="type your text here"
        value={editorText}
        onChange={handleTextareaChange}
      ></textarea>
    </div>
  );
}
