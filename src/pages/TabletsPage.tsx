import React, { useState, useEffect } from 'react';

import './TabletsPage.scss';

import { Product } from '../types/Product';
import { Loader } from '../components/Loader';
import { ProductsList } from '../components/ProductsList';
import { getData } from '../helpers/HTTPClient';

export const TabletsPage = () => {
  const [tablets, setTablets] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData<Product[]>('category/tablets')
      .then(setTablets)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="tablets-page">
      {loading ? (
        <Loader />
      ) : (
        <ProductsList
          title="Tablets"
          products={tablets}
          data-cy="productList"
        />
      )}
    </div>
  );
};
