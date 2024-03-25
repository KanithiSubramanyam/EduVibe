import React from 'react';

let imgurl="https://miro.medium.com/v2/resize:fit:1400/1*RviCn1R3vsdZbxdT2jGmug.jpeg";

function ExampleCarouselImage({ text }) {
    return (
      <img
        className="d-block w-100"
        src={imgurl}
        alt={text}
      />
    );
  }

export default ExampleCarouselImage;

  