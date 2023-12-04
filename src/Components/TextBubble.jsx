

const TextBubble = ({ text }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  };
  return (
    <span
      id={text.text}
      draggable="true"
      onDragStart={handleDragStart}
      className="textBubble"
     
      style={{fontSize:text.fontSize,color:text.color}}
    >
      {text.text}
    </span>
  );
};

export default TextBubble