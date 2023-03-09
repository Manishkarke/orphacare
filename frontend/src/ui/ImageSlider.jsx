import React, { useState, useEffect, useRef } from "react";
import { books, clothes, food } from "../assets";
import classes from "./ImageSlider.module.css";

function ImageSlider() {
  const images = [
    { path: food, alt: "Food" },
    { path: books, alt: "Books" },
    { path: clothes, alt: "Clothes" },
  ];
  const [imageIndex, setImageIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((index) => (index + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.transform = `translateX(-${imageIndex * 100}%)`;
    }
  }, [imageIndex, images.length]);

  return (
    <div className={classes["box"]}>
      <div className={classes["images"]} ref={imageRef}>
        {images.map((image) => (
          <img key={image.alt} src={image.path} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
