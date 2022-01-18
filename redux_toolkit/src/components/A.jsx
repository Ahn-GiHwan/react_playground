import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
import B1 from "./B1";
import B2 from "./B2";

const A = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const upCount = () => dispatch(increment());
  const downCount = () => dispatch(decrement());

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "700px",
        height: "600px",
        border: "1px solid",
        padding: "10px",
        backgroundColor: "red",
      }}
    >
      <div>
        <button onClick={upCount}>+</button>
        <button onClick={downCount}>-</button>
        <span style={{ fontSize: "20px", fontWeight: "700", color: "white" }}>
          {count}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid",
          padding: "10px",
        }}
      >
        <B1 />
        <B2 />
      </div>
    </div>
  );
};

export default A;
