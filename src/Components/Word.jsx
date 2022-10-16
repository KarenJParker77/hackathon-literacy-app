import React from "react";

const Word = ({ result }) => {
  return (
    <>
      <div className="question__container"></div>
      <h1>{result.image}</h1>
      <img src={result.image} alt="" />
    </>
  );
};

export default Word;
