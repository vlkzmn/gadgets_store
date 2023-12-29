import React, { useState, useEffect } from 'react';

import './AccessoriesPage.scss';

import { Product } from '../types/Product';
import { Loader } from '../components/Loader';
import { ProductsList } from '../components/ProductsList';
import { getData } from '../helpers/HTTPClient';

export const AccessoriesPage = () => {
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData<Product[]>('category/accessories')
      .then(setAccessories)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="accessories-page">
      {loading ? (
        <Loader />
      ) : (
        <ProductsList
          title="Accessories"
          products={accessories}
          data-cy="productList"
        />
      )}
    </div>
  );
};
