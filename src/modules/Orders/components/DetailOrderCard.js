import React from 'react';
import PropTypes from 'prop-types';

function DetailOrderCard(props) {
  const nine = 9;
  const { sale } = props;
  console.log(sale);
  const fullDate = new Date(sale.saleDate);
  const day = fullDate.getDate();
  const month = fullDate.getMonth();
  const formatMonth = month < nine ? `0${month + 1}` : `${month + 1}`;
  const formatDate = `${day}/${formatMonth}`;
  const formatedTotalPrice = `R$ ${sale.totalPrice.replace('.', ',')}`;

  const mult = (strNum1, strNum2) => {
    const num1 = parseFloat(strNum1);
    const num2 = parseInt(strNum2, 10);
    const formated = (num1 * num2).toFixed(2).replace('.', ',');
    return formated;
  };

  return (
    <div
      className="m-12"
    >
      <div>
        <div
          className="flex justify-between mb-3"
          data-testid={ `${sale.id - 1}-order-card-container` }
        >
          <div
            data-testid="order-number"
            className="sm:text-2xl md:texl-3xl lg:text-4xl"
          >
            Pedido
            {' '}
            {sale.id}
          </div>
          <div
            className="sm:text-lg md:texl-xl lg:text-2xl"
            data-testid="order-date"
          >
            {formatDate}
          </div>
        </div>
        {sale.products.map((product, index) => {
          const fmtdPrice = `R$ ${mult(product.price, product.salesProducts.quantity)}`;
          return (
            <div
              key={ index }
              className="flex justify-between overflow-hidden
                rounded-lg shadow-lg sm:text-xl md:texl-2xl lg:text-3xl"
            >
              <div
                className="m-4"
                data-testid={ `${index}-product-qtd` }
              >
                {product.salesProducts.quantity}
              </div>
              <div
                className="m-4"
                data-testid={ `${index}-product-name` }
              >
                {product.name}
              </div>
              <div
                className="m-4"
                data-testid={ `${index}-product-total-value` }
              >
                {fmtdPrice}
              </div>
            </div>

          );
        })}
        <div
          className="flex justify-start mt-3 sm:text-lg md:texl-xl lg:text-2xl"
          data-testid="order-total-value"
        >
          {sale.status}
        </div>
        <div
          className="flex justify-end mt-3 sm:text-lg md:texl-xl lg:text-2xl"
          data-testid="order-total-value"
        >
          Total:
          {' '}
          {formatedTotalPrice}
        </div>
      </div>
    </div>
  );
}

DetailOrderCard.propTypes = {
  sale: PropTypes.arrayOf(),
}.isRequired;

export default DetailOrderCard;
