import React,{useEffect} from "react";
import "./iframe.css";
import { useParams } from "react-router";
import { useState } from "react";



function Iframe() {
 const {id}=useParams();
 const ids=id;
 var datas;
 const [movie,setMovie]=useState([{
  name:"",
  trailer:"",
  rating:"",
  desc:"",
  genre:""
 }]);
  useEffect(() => {
    fetch("http://localhost:80/api/movie/"+id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
       
         console.log(data);
        setMovie(data);
        
      });
    },[]);
  return (
    <>
      <div className="container iframe">
        <div className="main iframe">
          <h1 className="title">{movie[0].name}</h1>
          <div >
            <div className="desFrame">
              <p>
                <b>Genre: </b>
                {movie[0].genre}
              </p>
              <p>
                <b>Year of Release: </b>
                2019
              </p>
              <p>
                <b>Rating: </b>
                {movie[0].rating}
                Stars
              </p>
            </div>
            <iframe
              className="iframeFrame"
              width="90%"
              height="250px"
              src={movie[0].trailer}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="movie-desc">Movie Description</div>
          <div className="description">
            <p>{movie[0].desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Iframe;
