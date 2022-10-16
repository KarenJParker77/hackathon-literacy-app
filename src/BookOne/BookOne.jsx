import React from "react";
import Results from "./Results";

const BookOne = ({screenView}) => {
  return (
    <>
      <div onClick={() => {screenView(0)}} className="backBtn" >x</div>
      <h1 className="center title">Match the picture to the word!</h1>
      <Results />
    </>
  );
};

export default BookOne;
