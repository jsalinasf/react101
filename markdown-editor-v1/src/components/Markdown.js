import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";

export default function Markdown(props) {
  return (
    <div className="wrapper-global">
      <header>
        <h1>Markdown Editor</h1>
      </header>
      <main className="wrapper-markdown">
        <Editor />
        <Preview />
      </main>
      <footer>
        <p>Learning React @2023</p>
      </footer>
    </div>
  );
}
