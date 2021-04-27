import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductRow from './ProductRow';
import ContextBeer from '../../../context/ContextBeer';

function ProductsList({ products }) {
  const {
    stringTotal,
  } = useContext(ContextBeer);
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full lg:w-3/5">
      { products.length === 0
        ? <p className="text-xl font-bold">Não há produtos no carrinho</p>
        : products.map((product, index) => (
          <ProductRow
            key={ `${index}-product` }
            testIdNumber={ index }
            product={ product }
          />
        ))}
      <div className="w-full">
        <p
          className="text-3xl font-bold text-right lg:mt-4 lg:mr-6"
          data-testid="order-total-value"
        >
          { stringTotal }
        </p>
      </div>
    </div>
  );
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.string,
    quantity: PropTypes.number,
  })).isRequired,
};

export default ProductsList;
