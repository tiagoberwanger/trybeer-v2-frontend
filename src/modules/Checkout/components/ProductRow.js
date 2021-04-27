import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import ContextBeer from '../../../context/ContextBeer';

function ProductRow({ product, testIdNumber }) {
  const { price, quantity, id } = product;
  const {
    products,
    removeProduct,
    findProduct,
  } = useContext(ContextBeer);

  const [productName, setProductName] = useState('');
  const [productStringPrice, setProductStringPrice] = useState('');

  const fullPrice = `R$ ${(parseFloat(price) * quantity).toFixed(2).replace('.', ',')}`;

  const onClick = () => {
    removeProduct(id);
  };

  useEffect(() => {
    if (products.length !== 0) {
      const currentProduct = findProduct(id);
      const { name, stringPrice } = currentProduct;
      setProductName(name);
      setProductStringPrice(stringPrice);
    }
  }, [products, findProduct, id]);

  return (
    <div
      className="flex m-2 w-full px-4 py-2 shadow-md lg:py-4 rounded-md lg:rounded-xl
      bg-gray-100 justify-between items-center"
    >
      <div className="w-1/5 bg-yellow-200 py-2 rounded-xl">
        <p
          className="text-3xl text-center font-semibold"
          data-testid={ `${testIdNumber}-product-qtd-input` }
        >
          { quantity }
        </p>
      </div>
      <div className="flex text-xl flex-col px-4 w-3/5">
        <div className="flex justify-center items-center">
          <p data-testid={ `${testIdNumber}-product-name` }>{ productName }</p>
        </div>
        <div
          className="flex justify-between items-baseline lg:justify-around items-center"
        >
          <div>
            <p data-testid={ `${testIdNumber}-product-total-value` }>
              { fullPrice }
            </p>
          </div>
          <div>
            <p
              className="text-gray-700 text-sm"
              data-testid={ `${testIdNumber}-product-unit-price` }
            >
              { `(${productStringPrice} un)` }
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/5 flex justify-center items-center">
        <button
          data-testid={ `${testIdNumber}-removal-button` }
          type="button"
          className="text-red-600 text-4xl text-right focus:outline-none"
          onClick={ () => onClick() }
        >
          <FaIcons.FaWindowClose />
        </button>
      </div>
    </div>
  );
}

ProductRow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    urlImage: PropTypes.string,
  }),
  testIdNumber: PropTypes.number,
}.isRequired;

export default ProductRow;
