import { createContext, useState } from 'react';

const WishlistContext = createContext({
  wishlist: [],
  totalFavorites: 0,
  addFavorite: (favoriteItem) => {},
  removeFavorite: (itemId) => {},
  itemIsFavorite: (itemId) => {}
});
export function WishlistContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  function addFavoriteHandler(favoriteItem) {
    console.log("ADDed");
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteItem);
    });
  }

  function removeFavoriteHandler(itemId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(item => item.id !== itemId);
    });
  }

  function itemIsFavoriteHandler(itemId) {
    console.log("Hii");
    return userFavorites.some(item => item.id === itemId);
  }

  const context2 = {
    wishlist: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <WishlistContext.Provider value={context2}>
      {props.children}
    </WishlistContext.Provider>
  );
}

export default WishlistContext;

