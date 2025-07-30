import React, { createContext, useContext, useState } from 'react';

const FavouritesContext = createContext();
export const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);
    const toggleFavourite = (product) => {
        setFavourites((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.filter((item) => item.id !== product.id);
            } else {
                return [...prev, product];
            }
        }
    );
};
const isFavourite = (productId) => {
    return favourites.some((item) => item.id === productId);
};
return (
<FavouritesContext.Provider value={{ favourites, toggleFavourite, isFavourite }}>
    {children}
    </FavouritesContext.Provider>
    );
};
export const useFavourites = () => useContext(FavouritesContext);
