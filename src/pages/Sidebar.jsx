import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <section>
        <div style={{ display: "flex", justifyContent: "start" }}>
          <img src="/Reserve.png" width="150px" height="auto" alt="" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            paddingLeft: "28px",
          }}
        >
          <div style={{ padding: "10px" }}></div>
          <Link
            to="/"
            style={{
              textDecoration: "none",

              transition: "background-color 0.3s ease-in-out", // Adding transition for smoother effect
              borderRadius: "0px", // Adding border radius for rounded corners
            }}
            className="link_side_bar" // Adding a class for easier styling
          >
            <p> Restaurant List </p>
          </Link>
          <div style={{ padding: "10px" }}></div>
          <Link
            to="/oder"
            style={{
              textDecoration: "none",

              transition: "background-color 0.3s ease-in-out", // Adding transition for smoother effect
              borderRadius: "0px", // Adding border radius for rounded corners
            }}
            className="link_side_bar" // Adding a class for easier styling
          >
            <p> Customers Oders</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
