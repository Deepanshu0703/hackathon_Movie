import React from 'react'
import HomeCard from './HomeCard'
import './CategoryDeck.css'
import { useState,useEffect } from 'react'
const CategoryDeck = (props) => {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    fetch("http://localhost:80/api/movie/get")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const arrays=[]
        const arrays2 = []
        for(var i=0;i<data.length;i++){
          if(data[i].lang===props.language){
            arrays.push(data[i]);
          }
          else if(data[i].lang!=="English" && data[i].lang!=="Hindi"){
            arrays2.push(data[i]);
          }
        }
        if(arrays.length>0){
      setShop(arrays);
        }
        else{
          setShop(arrays2);
        }
      });
  }, [props.language])
  
  return (
    <div className="deck">
      <h2 className='homeDeckTitle'>{props.language} Shows</h2>
      <div className="row HomeCard">
        {shop.map((item) => {
          
          return (
            <HomeCard
              key={item._id}
              id={item._id}
              title={item.name}
              description={item.description}
              img={item.image}
            />
          )
        })}
        {/* <HomeCard
          id="1"
          title="The Shawshank Redemption"
          description="Two imprisoned"
          img="https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg"
        />
        <HomeCard
          id="2"
          title="The Shawshank Redemption"
          description="Two imprisoned"
          img="https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg"
        />
        <HomeCard
          id="3"
          title="The Shawshank Redemption"
          description="Two imprisoned"
          img="https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg"
        />
        <HomeCard
          id="4"
          title="The Shawshank Redemption"
          description="Two imprisoned"
          img="https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg"
        /> */}
      </div>
    </div>
  );
}

export default CategoryDeck
