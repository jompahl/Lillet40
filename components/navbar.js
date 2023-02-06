import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "20%",
          minWidth: "350px",
          height: "100%",
        }}
      >
        {/* <img style={{ objectFit: "contain" }} src="/images/bread.png"></img> */}
        <h1 style={{ color: "rgb(233,233,233)", fontFamily: "" }}>#Lillet40</h1>
        {/* <img
          style={{ objectFit: "contain", transform: "rotateY(180deg)" }}
          src="/images/bread.png"
        ></img> */}
      </div>
    </div>
  );
};

export default Navbar;
