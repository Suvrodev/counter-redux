import React from "react";
import "./CounterView.css";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmont, increment, reset } from "../CounterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  //   console.log("DitchPatch: ", dispatch);
  return (
    <div className="w-6/12 mx-auto border flex flex-col gap-4 p-4">
      <h1 className="bg-green-600 text-white text-center p-3 w-11/12 mx-auto rounded-md">
        {" "}
        {count}
      </h1>
      <div className="flex flex-col gap-4 w-8/12 mx-auto">
        <div className="flex gap-2 justify-between ">
          <button
            className="myBtn"
            onClick={() => {
              dispatch(increment());
            }}
          >
            Increase
          </button>
          <button
            className="myBtn"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Decrease
          </button>
        </div>

        <div className="flex gap-2">
          <button
            className="myBtn"
            onClick={() => {
              dispatch(increaseByAmont(5));
            }}
          >
            Increment by 5
          </button>

          <button
            className="myBtn"
            onClick={() => {
              dispatch(reset());
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterView;
