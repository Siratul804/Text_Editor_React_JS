import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://restaurant-booking-server.vercel.app/api/restaurant/get"
        );
        setRestaurants(response.data);
        setLoading(false); // Set loading to false when data is fetched
        setSearchResults(response.data); // Initialize search results with all restaurants
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter restaurants based on search term
  useEffect(() => {
    const results = restaurants.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.tag.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, restaurants]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return (
      <>
        {" "}
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      </>
    ); // Display loading message while data is fetching
  }

  return (
    <>
      <h1>Restaurant List</h1>
      <br />

      <hr />

      <div className="">
        <main
          style={{
            paddingTop: "15px",
            paddingBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <>
            <input
              type="text"
              placeholder="Search by name or tag"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </>
          <>
            <Link
              to="/create"
              style={{
                textDecoration: "none",
              }}
              className="create_btn" // Adding a class for easier styling
            >
              <p style={{ fontSize: "14px" }}>Create Restaurant </p>
            </Link>
          </>
        </main>
        <div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Location</th>
                <th>Tag</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((restaurant) => (
                <tr key={restaurant.name}>
                  <td>
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      style={{ width: "100px", height: "auto" }}
                    />
                  </td>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.description}</td>
                  <td>{restaurant.location}</td>
                  <td>{restaurant.tag}</td>
                  <td>
                    <Link to={`/edit/${restaurant._id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path d="M21.71 2.29c-.39-.39-1.02-.39-1.41 0L3.71 19.29c-.38.38-.39 1.02-.01 1.41l-1.42 1.42c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.42-1.42c.38-.38 1.02-.39 1.41-.01l16-16c.39-.39.39-1.02 0-1.41zM5 18.17V21h2.83L18.17 9.83 15.34 7 5 17.34z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                      </svg>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default List;
