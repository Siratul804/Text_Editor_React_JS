// import Navbar from "./Navbar";
import Create from "./Routes/Create";
import EditRes from "./Routes/EditRes";
import List from "./Routes/List";
import Oders from "./Routes/Oders";
import Sidebar from "./Sidebar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dash = () => {
  return (
    <>
      <Router>
        <div
          className="dash_main"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <div className="side_bar">
            <Sidebar />
          </div>
          <div className="nav_bar">
            {/* <div>
              <Navbar />
            </div> */}
            <main style={{ padding: "25px" }}>
              <Routes>
                <Route path="/create" element={<Create />} />
                <Route path="/" element={<List />} />
                <Route path="/oder" element={<Oders />} />
                <Route path="/edit/:id" element={<EditRes />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Dash;
