import React from 'react';
import PropTypes from 'prop-types';

function CardAdmin(props) {
  const { pedido: {
    id,
    deliveryAddress,
    deliveryNumber,
    status,
    totalPrice,
  }, IndexId } = props;
  const formatPrice = `R$ ${totalPrice.replace('.', ',')}`;
  // console.log(formatPrice)
  return (
    <div
      className="flex sm:w-64 sm:h-40 md:w-64 md:h-40
      lg:w-72 lg:h-48 xl:w-80 xl:h-56 m-3 overflow-hidden rounded-lg shadow-lg"
    >
      <div
        className="flex flex-col items-center justify-center my-1 px-1
        w-full xl:my-4 xl:px-4 sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"
      >
        <div
          data-testid={ `${IndexId}-order-number` }
          className="text-2xl font-bold"
        >
          Pedido
          {' '}
          {id}
        </div>
        <div
          data-testid={ `${IndexId}-order-address` }
          className="text-sm"
        >
          {deliveryAddress}
          {', '}
          {deliveryNumber}
        </div>
        <div
          className="mt-10"
          data-testid={ `${IndexId}-order-total-value` }
        >
          {formatPrice}
        </div>
      </div>
      <div className="flex-auto m-4">
        <div
          data-testid={ `${IndexId}-order-status` }
          className={ status === 'Entregue' ? 'text-green-500' : 'text-yellow-400' }
        >
          {status}
        </div>
      </div>
    </div>
  );
}

CardAdmin.propTypes = {
  pedido: PropTypes.shape({
    id: PropTypes.number.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
  IndexId: PropTypes.number.isRequired,
};

export default CardAdmin;
