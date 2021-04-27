import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ContextBeer from '../context/ContextBeer';

function CartButton() {
  const history = useHistory();
  const {
    stringTotal,
  } = useContext(ContextBeer);

  const onClick = () => {
    history.push('/checkout');
  };

  return (
    <div
      className="flex items-center justify-center fixed w-full
      rounded-md bottom-12"
    >
      <button
        className="flex items-center justify-center bg-green-700
        rounded-md w-48 h-20"
        type="button"
        data-testid="checkout-bottom-btn"
        onClick={ () => onClick() }
        disabled={ stringTotal === 'R$ 0,00' }
      >
        <h1>Ver Carrinho</h1>
        <span>{' '}</span>
        <span data-testid="checkout-bottom-btn-value">
          { stringTotal }
        </span>
      </button>
    </div>
  );
}

export default CartButton;
