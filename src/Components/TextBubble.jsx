

const TextBubble = ({text}) => {

    const handleDragStart = (e)=>{
        e.dataTransfer.setData("text",e.target.id);
    }
  return (
    <span
      id={text}
      draggable="true"
      onDragStart={handleDragStart}
      className="textBubble"
    >
      {text}
    </span>
  );
}

export default TextBubble