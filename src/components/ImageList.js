import "./ImageList.css";

import ImageCard from "./ImageCard";

function ImageList({ images }) {
  return (
    <div>
      <h3> Explore Mars!</h3>
      <div className="ImageList-container">
        {images
          .filter((image) => image.explanation.includes("Mars"))
          .filter((image) => image.media_type === "image")
          .map((image) => (
            <ImageCard key={image.date} {...image} />
          ))}
      </div>
    </div>
  );
}

export default ImageList;
