import React from "react";
import C from "./C";

const B1 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "500px",
        height: "500px",
        border: "1px solid",
        backgroundColor: "skyblue",
      }}
    >
      B1
      <C />
    </div>
  );
};

export default B1;
