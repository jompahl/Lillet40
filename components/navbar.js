import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        top: "0",
        zIndex: "20",
        display: "flex",
        flex: "0 0 100px",
        flexShrink: "1",
        justifyContent: "center",
        height: "100px",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.6)",
        position: "sticky",
        backdropFilter: "blur(8px)",
        boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
      }}
    >
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
