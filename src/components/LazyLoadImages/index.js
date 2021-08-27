import React from "react";
import Image from "./Image";

const images = [
    {
      src: "https://images.unsplash.com/photo-1548834303-aefd0bb81b3c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=10&q=60",
      "data-src":
        'https://images.unsplash.com/photo-1548834303-aefd0bb81b3c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: "image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1613819405721-4da8802c8d70?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=10&q=60",
      "data-src":
        "https://images.unsplash.com/photo-1613819405721-4da8802c8d70?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1629381865827-dac8f732084e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=10&q=60",
      "data-src":
        "https://images.unsplash.com/photo-1629381865827-dac8f732084e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "image 3",
    },
    {
      src: "https://images.unsplash.com/photo-1468640488145-17bfa2c4eeaa?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=10&q=60",
      "data-src":
        "https://images.unsplash.com/photo-1468640488145-17bfa2c4eeaa?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "image 4",
    },
    {
      src: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyMnx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=10&q=60",
      "data-src":
        "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyMnx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "image 5",
    },
    {
      src: "https://images.unsplash.com/photo-1603325725990-553457a327f4?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4Mnx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=10&q=60",
      "data-src":
        "https://images.unsplash.com/photo-1603325725990-553457a327f4?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4Mnx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "image 6",
    },
  ];
  


const LazyImage = () => {


    return (
    <div className="section-content flex-column">
      <h2 className="title">Lazy load images</h2>

      {images.map((image) => (
        <Image key={image.alt} data_src={image.src} src={image["data-src"]} alt={image.alt} />
      ))}
    </div>
  );
};


export default LazyImage;
