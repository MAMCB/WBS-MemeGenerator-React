import { useState,useEffect } from 'react'
import ControlledCarousel from './Components/ControlledCarousel'
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

import './App.css'

function App() {
  const [memes,setMemes]=useState([]);
  const[activeMemeIndex,setActiveMemeIndex]=useState(0);

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then(response=>setMemes(response.data.data.memes)).catch(e=>console.log(e));
        
       
    
  }, []);

  useEffect(()=>{
    chooseRandom();
  },[memes])




  const chooseRandom = ()=>{
    const randomIndex = Math.floor(Math.random()*memes.length);
    console.log(memes.length);
    console.log(randomIndex);
    setActiveMemeIndex(randomIndex)

  }

  const selectMeme = (index)=>{
    setActiveMemeIndex(index);
    
  }
  

  return (
    <>
      <h1>Meme Generator</h1>
      <p>Choose a template and create your own unique meme!</p>
      {memes.length > 0 ? (
        <div>
          <img
            src={memes[activeMemeIndex].url}
            alt={memes[activeMemeIndex].name}
          />
          <h2>Choose a meme or...</h2>
          <button onClick={chooseRandom}>Pick a random</button>

          <ControlledCarousel items={memes} selectMeme={selectMeme} />
        </div>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </>
  );
}

export default App
