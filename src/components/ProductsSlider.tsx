import React, { useState } from 'react';
import classNames from 'classnames';

import './ProductsSlider.scss';

import { Product } from '../types/Product';
import { ProductCard } from './ProductCard';

type Props = {
  products: Product[];
  title: string;
};

const CARD_WIDTH = 288;
const CARD_GAP = 16;

export const ProductsSlider: React.FC<Props> = ({ products, title }) => {
  const [shift, setShift] = useState(0);

  const slideLeft = () => {
    setShift((current) => current + CARD_WIDTH);
  };

  const slideRight = () => {
    setShift((current) => current - CARD_WIDTH);
  };

  const sliderLength = -((products.length - 4) * CARD_WIDTH - CARD_GAP);

  return (
    <div className="products-slider">
      <div className="products-slider__header">
        <h2 className="products-slider__title">
          {title}
        </h2>

        <div className="products-slider__buttons">
          <button
            type="button"
            className={classNames(
              'products-slider__button products-slider__button--left',
              { ' products-slider__button--disabled': shift >= 0 },
            )}
            aria-label="move left"
            onClick={slideLeft}
            disabled={shift >= 0}
          />

          <button
            type="button"
            className={classNames(
              'products-slider__button products-slider__button--right',
              { ' products-slider__button--disabled': shift <= sliderLength },
            )}
            aria-label="move right"
            onClick={slideRight}
            disabled={shift <= sliderLength}
          />
        </div>
      </div>

      <div
        className="products-slider__product-cards"
        style={{ transform: `translateX(${shift}px)` }}
      >
        {products.map(product => (
          <div className="products-slider__product-card" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
