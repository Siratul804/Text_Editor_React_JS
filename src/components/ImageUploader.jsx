// src/components/ImageUploader.js
import { useState } from "react";
import axios from "axios";

const ImageUploader = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await axios.post(
        "YOUR_REMOTE_SERVER_UPLOAD_ENDPOINT",
        formData
      );
      const imageUrl = response.data.imageUrl;

      onImageUpload(imageUrl);
    } catch (error) {
      console.error("Image upload failed", error);
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <br />
      <button
        onClick={handleUpload}
        style={{ padding: "10px", backgroundColor: "green", color: "white" }}
      >
        Upload Image
      </button>
    </div>
  );
};

export default ImageUploader;
