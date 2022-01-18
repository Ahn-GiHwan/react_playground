import React from "react";
import { useDispatch, useSelector } from "react-redux";

const B2 = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        border: "1px solid",
        backgroundColor: "orange",
      }}
    >
      B2
      <span style={{ fontSize: "20px", fontWeight: "700", color: "white" }}>
        {count}
      </span>
    </div>
  );
};

export default B2;
