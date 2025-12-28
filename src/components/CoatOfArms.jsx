import React from "react";
import { asset } from "../utils/asset";

const CoatOfArms = () => {
  return (
    <div className="coat-of-arms">
      <img
        src={asset("/media/img/layout/escut_vidreres.png")}
        alt="Vidreres Coat of Arms"
        style={{
          height: "100px",
          width: "auto",
          display: "block",
          margin: "0 auto 1rem",
        }}
      />
    </div>
  );
};

export default CoatOfArms;
