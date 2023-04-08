import React from "react";
import CardBoot from "../items/CardBoot";
import "./moviespage.css"
import { useState,useEffect } from "react";

import { Navigate } from "react-router";


function Movies() {

  const [shop, setShop] = useState([]);

  useEffect(() => {

    const id=localStorage.getItem("userid");
    console.log(id);
    fetch("http://localhost:80/api/movie/find/"+id)

      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShop(data);
      });
  },[])

  
  const ids = localStorage.getItem('userid');

  return (
    (ids == null)  ? <Navigate to ='/loginPage'/>:
    <>
      <h1 style={{
        textAlign:"center",
        color:"white",
        marginTop:"10px",

      }}> Your Recommendation</h1>

      <div className="row">
        {shop.map((item)=>{
          return(
            <CardBoot
              key={item._id}
              id={item._id}
              title={item.name}
              description={item.description}
              img={item.image}
              genre={item.genre}
              rating={item.rating}
            />
          )
        })}
        
      </div>
      
     
    </>
  );
}
export default Movies;
