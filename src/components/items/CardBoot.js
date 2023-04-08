import React from "react";
import "./CardBoot.css";
import { useState } from "react";
import {  useNavigate } from "react-router";
// import StarRating from 'react-star-rating';
// import { Rating } from "@mui/material";

const CardBoot = (props) => {
  const navigate=useNavigate();
  const [showCard, setShowCard] = useState(false);
  const clicked=(e)=>{
   navigate('/feed/'+props.id);
  }
  return (
    <>
      <div
        className="card HomeCard"
        style={{ width: "20rem" }}
        onMouseEnter={() => setShowCard(true)}
        onMouseLeave={() => setShowCard(false)}
        onClick={clicked}
        >
        <img src={props.img} className="card-img" alt="..." />
        {showCard && (
          <div className="card-img-overlay myOverlay">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              <b>Genre: </b>
              {props.genre}
            </p>
            <p className="card-text">
              <b>Year of Release: </b>
              2019
            </p>
            <p className="card-text">
              <b>Rating: </b>
              {props.rating}
              
               Stars
              
            </p>
          </div>
        )}
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          {/* <ul className="list-group list-group-flush myCardList ">
            <li className="list-group-item">
              <b>genre: {props.genre}</b>
            </li>
            <li className="list-group-item">
              <b>Year of Release: {props.Year}</b>
            </li>
            <li className="list-group-item">
              <b>Rating: </b>
            </li>
          </ul> */}
        </div>

        {/* <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div> */}
      </div>
    </>
  );
};

export default CardBoot;
