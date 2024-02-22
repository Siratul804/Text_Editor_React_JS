import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const TextEditor = () => {
  const quillRef = useRef(null);
  const [editorHtml, setEditorHtml] = useState(""); // State to store editor content
  const [imageData, setImageData] = useState(null); // State to store image data

  const handleClick = async () => {
    console.log("Editor content:", editorHtml); // Log the editor content

    //image data
    console.log(imageData);

    const response = await axios.post(
      "YOUR_REMOTE_SERVER_UPLOAD_ENDPOINT",
      imageData
    );

    console.log(response);

    // Extract image data from editor content
    const imageRegex = /<img[^>]+src="([^">]+)"/g;
    const matches = editorHtml.match(imageRegex);
    if (matches) {
      const imageDataArray = matches.map((match) => {
        const srcRegex = /src="([^">]+)"/;
        const srcMatch = match.match(srcRegex);
        return srcMatch ? srcMatch[1] : null;
      });
      setImageData(imageDataArray);

      console.log("Image data:", imageDataArray); // Log the image data
    } else {
      console.log("No images found");
    }
  };

  return (
    <div>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={editorHtml}
        onChange={setEditorHtml}
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image", "video"],
            ["clean"],
          ],
          clipboard: {
            matchVisual: false,
          },
        }}
      />
      <br />
      <button
        onClick={handleClick}
        style={{ padding: "8px", backgroundColor: "green", color: "white" }}
      >
        Upload
      </button>
    </div>
  );
};

export default TextEditor;
