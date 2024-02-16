// src/App.js
import { useState } from "react";
import TextEditor from "./components/TextEditor";
import ImageUploader from "./components/ImageUploader";

const App = () => {
  const [editorContent, setEditorContent] = useState("");

  //storing data in editorContent state;
  console.log(editorContent);

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleImageUpload = (imageUrl) => {
    // You can use the imageUrl to embed the image in the text editor
    const updatedContent = `${editorContent}<img src="${imageUrl}" alt="Uploaded Image" />`;
    setEditorContent(updatedContent);
  };

  return (
    <div>
      <TextEditor onChange={handleEditorChange} />
      <ImageUploader onImageUpload={handleImageUpload} />
      <div dangerouslySetInnerHTML={{ __html: editorContent }} />
    </div>
  );
};

export default App;
