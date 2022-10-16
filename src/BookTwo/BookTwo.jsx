import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
  } from '@react-hook/window-size'
import Confetti from 'react-confetti'


const BookTwo = ({screenView}) => {
    const [answer, setAnswer] = useState(false);
    const [indexState, setIndexState] = useState(Number(0));
    const [gameFinished, setgameFinished] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState();
    //const [score, setScore] = useState();
   
   
    const bookDataArray = [
        {
            id:1,
            buttons:[
                {value:true, word:"cow",img:"/img/cow.png"}, 
                {value:false, word:"chicken", img:"/img/chicken.png"}, 
                {value:false, word:"cat",img:"/img/cat.png"}],
            sentenceP1: "The",
            sentenceP2: "jumped over the moon.",
            video:"/img/cow-moon.mp4",
        },
         {
            id:1,
            buttons:[
                {value:false, word:"Road", img:"/img/road.png"},
                {value:true, word:"Hill",  img:"/img/hill.png"},  
                {value:false, word:"Tree", img:"/img/tree.png"}],
            sentenceP1: "Jack and Jill went up the",
            sentenceP2: ".",
            video:"/img/hill.mp4",
        }
    ];

    const { width, height } = useWindowSize();
    let btn = document.querySelectorAll(".answerBtn");
    let answerVideo = document.querySelector('#videoPlayer');
    let source = document.querySelector('source');

    useEffect(() => {
         btn = document.querySelectorAll(".answerBtn");
         answerVideo = document.querySelector('#videoPlayer');
         source = document.querySelector('source');
      });
      console.log(answerVideo);
    const wordClick = (e, answer,value) =>{
        console.log(answer);
        if (!answer){
            e.currentTarget.disabled = true;
        }
        else{
            btn.forEach((btnSingle) => {
                btnSingle.disabled = true;
            });
            answerVideo.play();
        }
        setCorrectAnswer(value);
        setAnswer(answer);
    }

    const congratsBtn = () =>{
        if(indexState === bookDataArray.length -1){
            console.log('no more data');
            setgameFinished(true);

        }else{
            answerVideo.pause();
      
            btn.forEach((btnSingle) => {
                btnSingle.disabled = false;
            });
            setAnswer(false);
            setIndexState(indexState + 1);
        }  
    }
    const reset = () => {
        setAnswer(false);
        setIndexState(0);
        answerVideo.pause();
        setgameFinished(false);
        btn.forEach((btnSingle) => {
            btnSingle.disabled = false;
        });
    }

    function clip() {
        return (

            <video id="videoPlayer" width="400" className="w-100">
                <source src={bookDataArray[indexState].video} loop type="video/mp4"/>
            </video>
        );
      }

    return ( 
        <>
        <div onClick={() => {screenView(0)}} className="backBtn" >x</div>
        <>
            {
                answer  &&  <Confetti
                width={width}
                height={height}
            />
            }
        </>

      { gameFinished && 
                <div className="fullScreen d-flex align-items-center justify-content-center">
                    <div className="card">
                        <div className="card-body">
                            <div class="">
                                <h2>Your scored 2 out {bookDataArray.length}</h2>
                                <div className="d-flex justify-content-between mt-4">
                                    <button className="btnGeneral" onClick={() =>{ reset() }}> Try again</button>
                                    <button className="btnGeneral redBtn"  onClick={() =>{ screenView(0)
                                    }}>Return to the bookshelf</button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            }
     
      
        <div className="container card p-4 mt-5">
            <div className="row">
                <div className="col-4">
                <div className="animationBlock mb-4">
                        <div className="card">
                        { 
                            <video id="videoPlayer" width="400" className="w-100">
                                <source src={bookDataArray[indexState].video} loop type="video/mp4"/>
                            </video> 
                        }
                        </div>
                    </div>
                 
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h1>Click the correct word</h1>
                        </div>
                    </div>
                    <div className="row">
                            { bookDataArray[indexState].buttons.map((button,index) => {
                               //console.log(button.value,button.word);`statusbar-button-container ${fondo}`
                                return(
                                    <div className="col-4 mb-3" key={index}>
                                    <button className={`card answerBtn p-4  text-center w-100 ${button.value}`  } disabled={false} onClick={(e) => {wordClick(e,button.value,button.word)}}>
                                        <div className="d-flex align-items-center justify-content-center w-100">
                                            <div>
                                                <img className="d-block btnImg mb-4" src={button.img}/>
                                                <div className="text-center">{button.word}</div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                );
                              
                            }) }
                        </div>
                    <div className="row mt-5">
                        <div className="sentence col-12">
                            {
                                bookDataArray[indexState].sentenceP1
                            }
                            <span>
                                    <div>
                                        {answer && correctAnswer}
                                    </div>
                                </span>
                            {
                                bookDataArray[indexState].sentenceP2
                            }
                        </div>
                    </div>
                    {
                    answer  && 
                        <div className="row mt-5">
                          <div className="col-12">
                              <div className="card correct answer-box">
                                  <div className="card-body">
                                      <div className="w-100 d-flex justify-content-between">
                                          <h2>Well done you got it right.</h2>
                                            <button className="d-block" onClick={() => {congratsBtn()}}>Next</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    }
                </div>
            </div>
        </div>
        </>
    );
}
 
export default BookTwo;