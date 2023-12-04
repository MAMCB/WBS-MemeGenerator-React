import {v4 as uuidv4} from "uuid";
import { useState } from "react";
import Form from 'react-bootstrap/Form';


const TextEditMenu = ({ texts, setMemeText, setTextEdit }) => {

    const[edit,setEdit]=useState(false);
     

  const handleDelete = (e) => {
    const newTexts = texts.filter((text) => text !== texts[e.target.id]);
    setMemeText(newTexts);
    if(newTexts.length<1)
    {
        setTextEdit(false);
    }
  };

  const handleEdit =()=>{
    setEdit(!edit);
    

  }

  const handleColor = (e) => {
    const index = parseInt(e.target.id - 0.4);
    console.log(index);
    setMemeText((prevTexts) =>
      prevTexts.map((text, i) =>
        i === index ? { ...text, color: e.target.value } : text
      )
    );
  };

  const increaseFont = (e) => {
    const index = parseInt(e.target.id - 0.5);
    console.log(index);
    const oldTexts = texts.map((text, i) =>
      i === index ? { ...text, fontSize: text.fontSize + 1 } : text
    );
    setMemeText(oldTexts);
  };

  const decreaseFont = (e)=>{
    const index = parseInt(e.target.id - 0.6);
    console.log(index);
    const oldTexts = texts.map((text, i) =>
      i === index ? { ...text, fontSize: text.fontSize - 1 } : text
    );
    setMemeText(oldTexts);
    
  }

  return (
    <div>
      <ul>
        {texts.map((text, index) => (
          <li key={uuidv4()}>
            {text.text}
            <button id={index} onClick={handleDelete}>
              Delete
            </button>
            <button onClick={handleEdit}>Edit</button>
            {edit && (
              <Form>
                <Form.Select id={index + 0.4} aria-label="Default select example" onChange={handleColor}>
                  <option>Choose color</option>
                  <option value="black">Black</option>
                  <option value="white">White</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </Form.Select>
                <label htmlFor={index + "buttons"}>Change font size</label>
                <div id={index + "buttons"}>
                  <button id={index + 0.5} onClick={increaseFont}>+</button>
                  <button id={index + 0.6} onClick={decreaseFont}>-</button>
                </div>
              </Form>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextEditMenu