import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    tag: "",
    menu: "",
    number: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://restaurant-booking-server.vercel.app/api/restaurant/post",
        formData
      );
      console.log("Response:", response.data);
      alert(response.data.message);
      // Optionally, you can add logic to handle success/failure messages or redirect
    } catch (error) {
      console.error("Error:", error);
      // Handle error if needed
    }
  };

  return (
    <>
      <h1>Create Restaurant</h1>
      <br />
      <hr />
      <br />
      <div className="space_col"></div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="restaurant-form">
          <div className="input-group">
            <div className="input-row">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-row">
              <label>Location:</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-row">
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-row">
              <label>Tag: </label>
              <input
                type="text"
                name="tag"
                value={formData.tag}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-row">
              <label>Menu:</label>
              <input
                type="text"
                name="menu"
                value={formData.menu}
                onChange={handleChange}
                required
              />
              <span style={{ fontSize: "12px", paddingTop: "2px" }}>
                (Provide a valid URL)
              </span>
            </div>
            <div className="input-row">
              <label>Number:</label>
              <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-row">
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-row">
              <label>Image: </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
              <span style={{ fontSize: "12px", paddingTop: "2px" }}>
                (Provide a valid URL)
              </span>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Create;
