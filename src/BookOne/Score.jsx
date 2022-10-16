import React from "react";

const Score = ({ count }) => {
  if (!count) {
    return <h1 className="center title">No score yet!</h1>;
  } else if (count && count > 0) {
    return <h1 className="center title">Your score is {count}</h1>;
  }
};

export default Score;
