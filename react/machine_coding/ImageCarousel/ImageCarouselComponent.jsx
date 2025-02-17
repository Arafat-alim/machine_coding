import { useState } from "react";
import("./ImageCarouselComponent.css");

const ImageCarouselComponent = () => {
  const imagesData = [
    {
      id: 1,
      srcUrl:
        "https://images.unsplash.com/photo-1475598322381-f1b499717dda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MTM2Nng3NjglMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D",
      caption: "happy 1",
    },
    {
      id: 2,
      srcUrl:
        "https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "happy 2",
    },
    {
      id: 3,
      srcUrl:
        "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8MTM2Nng3NjglMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D",
      caption: "happy 3",
    },
    {
      id: 4,
      srcUrl:
        "https://images.unsplash.com/photo-1508144753681-9986d4df99b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fDEzNjZ4NzY4JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
      caption: "happy 4",
    },
    {
      id: 5,
      srcUrl:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "happy 5",
    },
  ];
  const [active, setActive] = useState(0);

  const handleNext = () => {
    const currentIndex = (active + 1) % imagesData.length;
    setActive(currentIndex);
  };
  const handlePrev = () => {
    const currentIndex = (active - 1 + imagesData.length) % imagesData.length;
    setActive(currentIndex);
  };

  return (
    <div className="carousel">
      <Carousel
        imagesData={imagesData}
        active={active}
        handleNext={handleNext}
        handlePrev={handlePrev}
        setActive={setActive}
      />
    </div>
  );
};

const Carousel = ({
  imagesData = [],
  active,
  handleNext,
  handlePrev,
  setActive,
}) => {
  const handleBulletinDot = (index) => {
    setActive(index);
  };
  return (
    <div className="carousel-viewport">
      {imagesData.map((img, index) => (
        <Image
          url={img.srcUrl}
          caption={img.caption}
          key={img.id}
          active={index === active}
        />
      ))}
      <div className="bulletin-navigation">
        {imagesData.map((_, index) => (
          <div
            className={`bulletin-navigation dot ${index === active}`}
            key={index}
            onClick={() => handleBulletinDot(index)}
          >
            <p>{index + 1}</p>
          </div>
        ))}
      </div>
      <div className="button-navigation">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

const Image = ({ url, caption, active }) => {
  return (
    <div className="carousel-image">
      <img className={active ? "active" : ""} src={url} alt={caption} />
    </div>
  );
};

export default ImageCarouselComponent;
