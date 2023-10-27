import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";

export default function MarkDown(props) {
  return (
    <div className="wrapper'markdown">
      <Editor />
      <Preview />
    </div>
  );
}
