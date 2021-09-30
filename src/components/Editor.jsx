import Previewer from "./Previewer";
import { useState } from "react";

export default function Editor() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div id="editor">
      <h4>This is my editor</h4>
      <textarea onChange={handleChange} cols="30" rows="10"></textarea>
      <Previewer value={text} />
    </div>
  );
}
