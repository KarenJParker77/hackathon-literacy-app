import React from "react";
import { gsap } from "gsap";
import { useEffect } from "react";

const Word = ({ result, buttonClick }) => {
  useEffect(() => {
    gsap.fromTo(
      ".bg-success",
      { x: -50 },
      { x: 50, duration: 5, ease: "elastic.out(1, 0.3)" }
    );
  }, []);
  return (
    <>
      <h1 className="bg-success">Question {result.id}</h1>
      <div className="question__container">
        <img src={result.image} alt="Icon" />
        <div className="options">
          <button
            className="optionOne btn btn-warning btn-lg"
            onClick={() => {
              buttonClick(result.optionOne.value);
            }}
          >
            <h2>{result.optionOne.name}</h2>
          </button>
          <button
            className="optionTwo btn btn-info btn-lg"
            onClick={() => {
              buttonClick(result.optionTwo.value);
            }}
          >
            <h2>{result.optionTwo.name}</h2>
          </button>
        </div>
      </div>
    </>
  );
};

export default Word;
