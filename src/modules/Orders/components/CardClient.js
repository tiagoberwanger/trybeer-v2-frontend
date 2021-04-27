import React from 'react';
import PropTypes from 'prop-types';

function CardClient(props) {
  const five = 5;
  const { pedido: { id, totalPrice, saleDate, status } } = props;
  const formatedDate = saleDate.substr(five, five).replace('-', '/').split('/').reverse()
    .join('/');
  const formatedTotalPrice = `R$ ${totalPrice.replace('.', ',')}`;
  return (
    <div
      className="flex sm:w-64 sm:h-40 md:w-64 md:h-40
        lg:w-72 lg:h-48 xl:w-80 xl:h-56 m-3 overflow-hidden rounded-lg shadow-lg"
    >
      <div
        className="flex flex-col items-center justify-center my-1 px-1
          w-full xl:my-4 xl:px-4 sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"
        data-testid={ `${id - 1}-order-card-container` }
      >
        <div
          data-testid={ `${id - 1}-order-number` }
          className="xl:text-3xl font-bold"
        >
          Pedido
          {' '}
          {id}
        </div>
        <div
          data-testid={ `${id - 1}-order-date` }
        >
          {formatedDate}
        </div>
        <div>
          {status}
        </div>
        <div
          className="mt-10"
          data-testid={ `${id - 1}-order-total-value` }
        >
          {formatedTotalPrice}
        </div>
      </div>
    </div>
  );
}

CardClient.propTypes = {
  pedido: PropTypes.shape({
    id: PropTypes.string,
    totalPrice: PropTypes.number,
    saleDate: PropTypes.string,
  }),
}.isRequired;

export default CardClient;
