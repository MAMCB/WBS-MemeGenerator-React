

const TextBubble = ({text,textRef}) => {

    const handleDragStart = (e)=>{
        e.dataTransfer.setData("text",e.target.id);
    }
  return (
    <span
      id={text}
      draggable="true"
      onDragStart={handleDragStart}
      className="textBubble"
      ref={textRef}
    >
      {text}
    </span>
  );
}

export default TextBubble