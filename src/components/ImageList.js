import "./ImageList.css";
import ImageCard from "./ImageCard";
import React from "react";

const ImageList = (props) => {
  const cards = props["images"].map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{cards}</div>;
};

export default ImageList;
