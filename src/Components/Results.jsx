import React, { useState } from "react";
import { allWords } from "../Mock data";
import Word from "./Word";
import Score from "./Score";

const Results = () => {
  const [indexState, setIndexState] = useState(Number(0));
  const [count, setCount] = useState(Number(0));

  const buttonClick = (value) => {
    console.log(value);
    if (value === true) {
      setCount(count + 1);
      setIndexState(indexState + 1);
    } else {
      return;
    }
  };

  return (
    <>
      <Word
        key={allWords[indexState].id}
        result={allWords[indexState]}
        buttonClick={buttonClick}
      />
      <Score count={count} />
    </>
  );
};

export default Results;
