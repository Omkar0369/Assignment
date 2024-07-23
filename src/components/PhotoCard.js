import React from "react";

const PhotoCard = ({photo,description})=>{
    return (
        <div className="photo-card">
            <img src={photo} alt={description}></img>
            <p>{description}</p>
            <button></button>

        </div>
    )
} 

export default PhotoCard;

