import React from "react";
import CountDownTimer from "./countDownTimer";

const Navbar = () => {
  function getMs() {
    const date = new Date("May 13, 2023 16:30:00");
    let ms = date.getTime();
    return ms;
  }

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
        <h2
          style={{
            color: "rgb(233,233,233)",
            fontFamily: "",
            display: "flex",
          }}
        >
          <CountDownTimer countdownTimestampMs={getMs()} />
          &nbsp;to&nbsp;#Lillet40
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
