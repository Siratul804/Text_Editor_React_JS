// src/components/TextEditor.js
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles

const TextEditor = ({ onChange }) => {
  return (
    <ReactQuill
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
      }}
      onChange={onChange}
    />
  );
};

export default TextEditor;
