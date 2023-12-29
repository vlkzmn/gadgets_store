import React, { useContext } from 'react';

import { Product } from '../types/Product';
import { useLocalStorage } from '../hooks/useLocalStorage';

type FavouritesContextType = {
  favourites: Product[],
  setFavourites: (product: Product) => void,
};

export const FavouritesContext = React.createContext<FavouritesContextType>({
  favourites: [],
  setFavourites: () => { },
});

type Props = {
  children: React.ReactNode;
};

export const FavouritesProvider: React.FC<Props> = ({ children }) => {
  const [favourites, saveFavourites]
    = useLocalStorage<Product[]>('favourites', []);

  const setFavourites = (product: Product) => {
    const isFavourites = favourites
      .some(item => item.id === product.id);

    if (!isFavourites) {
      saveFavourites([...favourites, product]);
    } else {
      saveFavourites([...favourites]
        .filter(item => item.id !== product.id));
    }
  };

  return (
    <FavouritesContext.Provider value={{
      favourites,
      setFavourites,
    }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export function useFavouritesContext() {
  const favourites = useContext(FavouritesContext);

  return favourites;
}
