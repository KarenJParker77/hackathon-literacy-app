import React, {useState} from 'react';
import BookOne from './BookOne/BookOne';
import BookTwo from './BookTwo/BookTwo';
import Interface from './Interface';
import "./App.css";

const App = () => {
  const [screenState, setScreenState] = useState(0);


  const screenView = (value) =>{
    setScreenState(value)
    console.log(value);
  }
    

  return ( 
    <>
       {screenState === 0 &&   <Interface screenView={screenView}/> }
       {screenState === 1 &&   <BookOne screenView={screenView}/> }
       {screenState === 2 &&   <BookTwo  screenView={screenView} /> } 
    </>

   );
}
 
export default App;