import React, { useState } from "react";
import { allWords } from "../Mock data";
import Word from "./Word";

const Results = () => {
  const [indexState, setIndexState] = useState(Number(0));

  const buttonClick = (value) => {
    console.log(value);
    if (value === true) {
      setIndexState(indexState + 1);
    } else {
      return;
    }
  };

  return (
    <Word
      key={allWords[indexState].id}
      result={allWords[indexState]}
      buttonClick={buttonClick}
    />
  );
};

export default Results;
