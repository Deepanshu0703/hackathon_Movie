import React from "react";
import { useState } from "react";
const HomeCard = (props) => {
    const [showCard, setShowCard] = useState(false); 
    return (
        <div>
      <>
        <div
          className="card"
          style={{ width: "18rem" }}
          onMouseEnter={() => setShowCard(true)}
          onMouseLeave={() => setShowCard(false)}
        >
          <img src={props.img} className="card-img" alt="..." />
          {showCard && (
            <div className="card-img-overlay myOverlayHome">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
                <b>Genre: </b>
                {props.genre}
              </p>
              <p className="card-text">
                <b>Year of Release: </b>
                {props.Year}
              </p>
              <p className="card-text">
                <b>Rating: </b>
                {props.rating}
                Stars
              </p>
            </div>
          )}
          
        </div>
      </>
      
    </div>
  );
};

export default HomeCard;
