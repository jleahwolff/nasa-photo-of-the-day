import React from "react";
import styles from 'styled-components';

const CardDiv = styles.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 50%;

h2 {
    font-size: 72px;
    background: -webkit-linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Fjalla One', sans-serif;
}

.image{
    border-radius: 2%;
    margin-bottom: 4%;
}
`

const aCard = props => {
const {dailyTitle, dailyPhoto, dailyDesc, dailyDate} = props

    return (
    <CardDiv className="photoCard">    
        <h2>Title: {dailyTitle}</h2>
        <img className="image" src={dailyPhoto} alt="Space by NASA" />
        <h4>Date of photo: {dailyDate}</h4>
        <p> Description: {dailyDesc}</p>
        </CardDiv>
    );
}

export default aCard;