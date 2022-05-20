import { useState } from "react";
import { BaseEditor, createEditor, Descendant } from "slate";
import { HistoryEditor } from 'slate-history';
import { Editable, ReactEditor, Slate, withReact } from "slate-react";

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string; bold?: true }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}

const initalValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

export const TheEditor = () => {
  const [editor] = useState(() => withReact(createEditor()))
  console.log('EDITOR');
  return (
    <Slate editor={editor} value={initalValue}>
      <Editable />
    </Slate>
  )
}