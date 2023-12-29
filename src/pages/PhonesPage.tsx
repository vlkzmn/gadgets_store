import React, { useState, useEffect } from 'react';

import './PhonesPage.scss';

import { Product } from '../types/Product';
import { Loader } from '../components/Loader';
import { ProductsList } from '../components/ProductsList';
import { getData } from '../helpers/HTTPClient';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData<Product[]>('category/phones')
      .then(setPhones)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="phones-page">
      {loading ? (
        <Loader />
      ) : (
        <ProductsList
          title="Mobile phones"
          products={phones}
          data-cy="productList"
        />
      )}
    </div>
  );
};
