import {v4 as uuidv4} from "uuid";

const TextEditMenu = ({ texts, setMemeText, setTextEdit }) => {
  const handleDelete = (e) => {
    const newTexts = texts.filter((text) => text != texts[e.target.id]);
    setMemeText(newTexts);
    if(newTexts.length<1)
    {
        setTextEdit(false);
    }
  };
  return (
    <div>
      <ul>
        {texts.map((text, index) => (
          <li key={uuidv4()}>
            {text}
            <button id={index} onClick={handleDelete}>
              Delete
            </button>
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextEditMenu