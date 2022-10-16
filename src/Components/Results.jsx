import React from "react";
import { allWords } from "../Mock data";
import Word from "./Word";

const Results = () => {
  return allWords.map((result) => {
    return <Word key={result.id} result={result} />;
  });
};

export default Results;
