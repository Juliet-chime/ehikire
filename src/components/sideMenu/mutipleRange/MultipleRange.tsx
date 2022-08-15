import React from "react";
import { MutilpleRangeWrapper } from "./style";

export default function MultipleRange() {
  return (
    <MutilpleRangeWrapper>
      <h1>Multi Range</h1>
      <div>
        <div>
          <input
            type="radio"
            id="1000"
            name="range"
            value="1000"
            className="cursor-pointer"
            // onChange={setMode}
            // checked={currentMode === "Dark"}
          />
          <label htmlFor="1000">NGN1,000</label>
        </div>

        <div>
          <input
            type="radio"
            id="lessthan10000"
            name="range"
            value="10000"
            className="cursor-pointer"
          />
          <label htmlFor="lessthan10000">NGN1,000-10,000</label>
        </div>

        <div>
          <input
            type="radio"
            id="lessthan50000"
            name="range"
            value="50000"
            className="cursor-pointer"
          />
          <label htmlFor="lessthan50000">NGN10,000-50,000</label>
        </div>

        <div>
          <input
            type="radio"
            id="lessthan100000"
            name="range"
            value="100000"
            className="cursor-pointer"
          />
          <label htmlFor="lessthan100000">NGN50,000-100,000</label>
        </div>
        <div>
          <input
            type="radio"
            id="all"
            name="range"
            value="all"
            className="cursor-pointer"
          />
          <label htmlFor="all">All</label>
        </div>
      </div>
    </MutilpleRangeWrapper>
  );
}
