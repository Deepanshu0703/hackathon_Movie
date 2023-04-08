import React from 'react'
import CategoryDeck from '../items/CategoryDeck'
import Banner from '../items/Banner'
const Mainpage = () => {
  return (
    <div>
      <Banner/>
      <CategoryDeck language="Hindi"/>
      <CategoryDeck language="English"/>
      <CategoryDeck language="Others"/>
    </div>
  )
}

export default Mainpage
