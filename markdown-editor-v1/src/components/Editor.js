import React from "react";
import { processText } from "../tools/TextInterpreter";

export default function Editor({
  editorText,
  setEditorText,
  setConvertedText,
}) {
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
