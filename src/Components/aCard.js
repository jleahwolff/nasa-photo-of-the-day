import React from "react";

const aCard = props => {
const {dailyTitle, dailyPhoto, dailyDesc, dailyDate} = props

    return (
    <div className="photoCard">    
        <h2>Title: {dailyTitle}</h2>
        <img className="image" src={dailyPhoto} alt="Space by NASA" />
        <h4>Date of photo: {dailyDate}</h4>
        <p> Description: {dailyDesc}</p>
        </div>
    );
}

export default aCard;