import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';
import { WishlistContextProvider } from './store/wishlist-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<FavoritesContextProvider>
    <WishlistContextProvider>
<BrowserRouter>
<App />
</BrowserRouter>
</WishlistContextProvider>
</FavoritesContextProvider>);