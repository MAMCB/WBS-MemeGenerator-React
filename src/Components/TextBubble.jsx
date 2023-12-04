

const TextBubble = ({ text, textRef }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  };
  return (
    <span
      id={text.text}
      draggable="true"
      onDragStart={handleDragStart}
      className="textBubble"
      ref={textRef}
      style={{fontSize:text.fontSize,color:text.color}}
    >
      {text.text}
    </span>
  );
};

export default TextBubble