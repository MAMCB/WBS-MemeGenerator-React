import { useState, useEffect, useRef, createRef } from "react";
import ControlledCarousel from './Components/ControlledCarousel'
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import TextBubble from './Components/TextBubble';
import TextEditMenu from './Components/TextEditMenu';


import './App.css'

function App() {
  const [memes,setMemes]=useState([]);
  const[activeMemeIndex,setActiveMemeIndex]=useState(0);
  const[memeText,setMemeText]=useState([]);
  const[textEdit,setTextEdit]=useState(false);
  
  

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then(response=>setMemes(response.data.data.memes)).catch(e=>console.log(e));
        
       
    
  }, []);

  useEffect(()=>{
    chooseRandom();
  },[memes])

  useEffect(()=>{
    
    console.log(memeText);
  },[memeText]);




  const chooseRandom = ()=>{
    const randomIndex = Math.floor(Math.random()*memes.length);
    console.log(memes.length);
    console.log(randomIndex);
    setActiveMemeIndex(randomIndex)

  }

  const selectMeme = (index)=>{
    setActiveMemeIndex(index);
    
  }

  const addText = ()=>{
    const newText=prompt("Add text:");
    const newMemeText = {
      text:newText,
      fontSize:30,
      color:"black"
    }
    setMemeText([...memeText,newMemeText]);
  }

 function drop(ev) {
   ev.preventDefault();

   // Get the dragged data
   let data = ev.dataTransfer.getData("text");

   // Create a new element with the same text
   let draggedElement = document.getElementById(data);
   

   // Set the position of the new element based on the mouse coordinates
   draggedElement.style.position = "absolute";
   draggedElement.style.left =
     ev.clientX - draggedElement.offsetWidth / 2 + "px";
   draggedElement.style.top =
     ev.clientY - draggedElement.offsetHeight / 2 + "px";

   
 }


function allowDrop(ev) {
  ev.preventDefault();
}

const editText =()=>{
  setTextEdit(!textEdit);
}
  

  return (
    <>
      <h1>Meme Generator</h1>
      <p>Choose a template and create your own unique meme!</p>
      {memes.length > 0 ? (
        <div>
          {memeText.length > 0 &&
            memeText.map((text, index) => (
              <TextBubble key={index} text={text}  />
            ))}
          <div>
            <button onClick={addText}>Add text</button>
            {memeText.length > 0 && (
              <button onClick={editText}>Edit text</button>
            )}
          </div>
          <div className="mainImageDiv">
            <img
              onDrop={drop}
              onDragOver={allowDrop}
              src={memes[activeMemeIndex].url}
              alt={memes[activeMemeIndex].name}
            />
            {textEdit && (
              <TextEditMenu
                setMemeText={setMemeText}
                texts={memeText}
                setTextEdit={setTextEdit}
                textSettings={memeText}
                
              />
            )}
          </div>
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
