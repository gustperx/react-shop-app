import { FC } from "react";
import { LabelError } from "./";

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { TextDescription } from "../../types";

// Initialize a markdown parser
const mdParser = new MarkdownIt();

interface Props {
    label: string;
    handleChange: () => void;
    activeError: boolean;
    inputValue?: TextDescription | undefined;
  }

export const TextEditor: FC<Props> = ({ label, activeError, inputValue, handleChange }) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <MdEditor style={{ height: '500px', width: '100%' }} value={inputValue?.text || ''} renderHTML={text => mdParser.render(text)} onChange={handleChange} />
      <label className="label">
        {activeError && <LabelError message="Description es un campo obligatorio" />}
      </label>
    </div>
  )
}
