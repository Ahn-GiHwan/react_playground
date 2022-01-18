import React from "react";
import { useDispatch, useSelector } from "react-redux";

const C = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        border: "1px solid",
        backgroundColor: "pink",
      }}
    >
      C
      <span style={{ fontSize: "20px", fontWeight: "700", color: "white" }}>
        {count}
      </span>
    </div>
  );
};

export default C;
