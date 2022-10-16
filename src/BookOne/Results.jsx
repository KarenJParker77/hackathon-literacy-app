import React, { useState } from "react";
import Word from "./Word";
import Score from "./Score";

const Results = () => {

  const allWords = [
    {
      questionName: "Pen",
      id: 1,
      optionOne: { name: "Pin", value: false },
      optionTwo: { name: "Pen", value: true },
      image: "./assets/book-one-icons/Pen.png",
    },
    {
      questionName: "Frog",
      id: 2,
      optionOne: { name: "Frog", value: true },
      optionTwo: { name: "Fog", value: false },
      image: "./assets/book-one-icons/Frog.png",
    },
    {
      questionName: "Goat",
      id: 3,
      optionOne: { name: "Coat", value: false },
      optionTwo: { name: "Goat", value: true },
      image: "./assets/book-one-icons/Goat.png",
    },
  
    {
      questionName: "Van",
      id: 4,
      optionOne: { name: "Fan", value: false },
      optionTwo: { name: "Van", value: true },
      image: "./assets/book-one-icons/Van.png",
    },
    {
      questionName: "Pin",
      id: 5,
      optionOne: { name: "Pin", value: true },
      optionTwo: { name: "Pen", value: false },
      image: "./assets/book-one-icons/Pin.png",
    },
    {
      questionName: "Fog",
      id: 6,
      optionOne: { name: "Frog", value: false },
      optionTwo: { name: "Fog", value: true },
      image: "./assets/book-one-icons/Fog.png",
    },
    {
      questionName: "Coat",
      id: 7,
      optionOne: { name: "Goat", value: false },
      optionTwo: { name: "Coat", value: true },
      image: "./assets/book-one-icons/Coat.png",
    },
  
    {
      questionName: "Fan",
      id: 8,
      optionOne: { name: "Van", value: false },
      optionTwo: { name: "Fan", value: false },
      image: "./assets/book-one-icons/Fan.png",
    },
  ];
  


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
