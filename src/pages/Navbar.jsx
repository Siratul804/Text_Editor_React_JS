const Navbar = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: "#FF645A",
          padding: "0px 0px",
          width: "auto",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <li
            style={{
              marginLeft: "15px",
              padding: "2px",
              overflow: "hidden",
              color: "white",
            }}
          ></li>
          <li
            style={{
              marginLeft: "15px",
              padding: "2px",
              overflow: "hidden",
            }}
          ></li>
        </ul>
      </section>
    </>
  );
};

export default Navbar;
