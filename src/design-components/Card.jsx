import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import ContextBeer from '../context/ContextBeer';

function Card({ product, testIdNumber }) {
  const { id, quantity, price } = product;
  const {
    products,
    clickMinus,
    clickPlus,
    findProduct,
  } = useContext(ContextBeer);

  const [productName, setProductName] = useState('');
  const [productStringPrice, setProductStringPrice] = useState('');
  const [productUrlImage, setProductUrlImage] = useState('');

  useEffect(() => {
    if (products.length !== 0) {
      const currentProduct = findProduct(id);
      const { name, stringPrice, urlImage } = currentProduct;
      setProductName(name);
      setProductStringPrice(stringPrice);
      setProductUrlImage(urlImage);
    }
  }, [products, id, findProduct]);

  return (
    <div
      className="flex flex-col items-center justify-center border-2
      border-gray-800 w-36 h-56 rounded-md shadow-md p-2 font-sans lg:w-64 lg:h-96 m-5"
    >
      <div className="relative flex flex-col space-y-4 items-center">
        <img
          src={ productUrlImage }
          alt={ productName }
          className="mx-auto h-24 w-24 w-auto"
          data-testid={ `${testIdNumber}-product-img` }
        />
        <p className="text-center" data-testid={ `${testIdNumber}-product-name` }>
          { productName }
        </p>
        <p data-testid={ `${testIdNumber}-product-price` }>
          { productStringPrice }
        </p>
      </div>
      <div className="relative mt-2 flex justify-center items-center">
        <button
          type="button"
          className="focus:outline-none"
          onClick={ () => clickPlus(id, quantity, price) }
          data-testid={ `${testIdNumber}-product-plus` }
        >
          <FaIcons.FaPlusSquare />
        </button>
        <p
          data-testid={ `${testIdNumber}-product-qtd` }
        >
          { quantity }
        </p>
        <button
          type="button"
          className="focus:outline-none"
          onClick={ () => clickMinus(id, quantity, price) }
          data-testid={ `${testIdNumber}-product-minus` }
        >
          <FaIcons.FaMinusSquare />
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    quantity: PropTypes.number,
    price: PropTypes.string,
  }).isRequired,
  testIdNumber: PropTypes.number.isRequired,
};

export default Card;
