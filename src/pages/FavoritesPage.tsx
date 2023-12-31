import React from 'react';
import './FavoritesPage.scss';

import { useFavouritesContext } from '../context/FavouritesContext';
import { ProductsList } from '../components/ProductsList';

export const FavoritesPage = () => {
  const { favourites } = useFavouritesContext();

  return (
    <div className="favorites">
      <ProductsList
        title="Favourites"
        products={favourites}
      />
    </div>
  );
};
