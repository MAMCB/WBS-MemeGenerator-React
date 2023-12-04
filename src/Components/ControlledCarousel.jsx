import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";


const ControlledCarousel = ({ items, selectMeme }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleImageClick = (e)=>{
    const newIndex = parseInt(e.target.id);
    console.log(newIndex);
    selectMeme(newIndex);
  }

  return (
    <Carousel className="carouselDiv" activeIndex={index} onSelect={handleSelect}>
      {items.map((item,i) => (
        <Carousel.Item key={item.id}>
          <img id={i} onClick={handleImageClick} className="carouselImg" src={item.url} alt={item.name} />
          <Carousel.Caption>
            <h3 className="carousel">{item.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ControlledCarousel;
