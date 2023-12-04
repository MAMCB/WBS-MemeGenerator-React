import {v4 as uuidv4} from "uuid";


const TextEditMenu = ({ texts, setMemeText, setTextEdit,textRefs }) => {

     

  const handleDelete = (e) => {
    const newTexts = texts.filter((text) => text != texts[e.target.id]);
    setMemeText(newTexts);
    if(newTexts.length<1)
    {
        setTextEdit(false);
    }
  };

  const handleEdit =(e)=>{
    const index = parseInt(e.target.id-0.5);
    const ref = textRefs.current[index];
    if(ref.current)
    {
        ref.current.style.color="red";
    }


  }
  return (
    <div>
      <ul>
        {texts.map((text, index) => (
          <li key={uuidv4()}>
            {text}
            <button id={index} onClick={handleDelete}>
              Delete
            </button>
            <button id={index+0.5} onClick={handleEdit}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextEditMenu