import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";

export default function Markdown() {
  const [editorText, setEditorText] = React.useState("");
  const [convertedText, setConvertedText] = React.useState("");

  return (
    <div className="wrapper-global">
      <header>
        <h1>Markdown Editor</h1>
      </header>
      <main className="wrapper-markdown">
        <Editor
          editorText={editorText}
          setEditorText={setEditorText}
          setConvertedText={setConvertedText}
        />
        <Preview convertedText={convertedText} />
      </main>
      <footer>
        <p>Learning React @2023</p>
      </footer>
    </div>
  );
}
