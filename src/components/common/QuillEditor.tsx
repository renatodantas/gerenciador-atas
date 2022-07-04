import { useState } from "react";
import ReactQuill from "react-quill";

export const QuillEditor = () => {
  const [value, setValue] = useState('');

  return (
    <ReactQuill theme="snow" value={value} onChange={setValue} />
  );
}