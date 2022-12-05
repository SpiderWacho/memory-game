import React from "react";
import './Card.css'

const Card = (props) => {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

    const selectRandom = () => {
        const length = props.imgs.length;
        console.log(getRandomInt(0, length))
        return getRandomInt(0, length);
    }

    

    return(
        <div className="card">
            <div className="img-container">
                <img className="image" alt="card" src={props.imgs[selectRandom()]}></img>
            </div>
            <div className="name-container">
                <p>Text card</p>
            </div>
        </div>
    )
}

export default Card;
