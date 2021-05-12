import { useState } from "react";

const Image = ({ date, images, routeProps, handleFavorite, imageInfo }) => {
    const foundMatch = images.find(
        (image) => image.date == routeProps.match.params.date
    );
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClick = () => {
        setIsFavorite(!isFavorite);
        handleFavorite(imageInfo);
    };

    return (
        <div className="img-component-container">
            <img className="img-hd" src={foundMatch.url} alt="hd image" />
            <div className="img-details-container">
                <h1 className="img-title">{foundMatch.title}</h1>
                <p className="img-explanation">
                    <p>About this picture: </p>
                    {foundMatch.explanation}
                </p>
                <p className="img-date">Shooting date: {foundMatch.date}</p>
                <p className="img-copyright">
                    Copyright: {foundMatch.copyright}
                </p>
                <div
                    className="add-favorite"
                    id={foundMatch.title}
                    onClick={handleFavorite}
                >
                    Add this Picture to My Favorites: {isFavorite ? "💜" : "🤍"}
                </div>
            </div>
        </div>
    );
};

export default Image;
