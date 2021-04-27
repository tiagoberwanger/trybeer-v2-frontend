import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../axios/api';
import ContextBeer from '../../context/ContextBeer';
import TopBar from '../../design-components/TopBar';
import ProductsList from './components/ProductsList';
import Button from '../../design-components/Button';
import LabeledInput from '../../design-components/LabeledInput';

function Checkout() {
  const { sale, getUser, total, initiateSale } = useContext(ContextBeer);
  const history = useHistory();
  const products = sale.filter((product) => product.quantity !== 0);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [success, setSuccess] = useState(false);
  const handleSubmit = () => {
    const bodyObj = {
      products,
      total: parseFloat(total),
      deliveryAddress,
      deliveryNumber,
    };
    api
      .post('/sales', bodyObj)
      .catch((err) => console.log(err.message));
    setSuccess(true);
    initiateSale();
  };

  useEffect(() => {
    const user = getUser();
    if (!user) history.push('/login');
  }, [getUser, history]);

  useEffect(() => {
    if (sale.length === 0
      || deliveryAddress === ''
      || deliveryNumber === '') setButtonDisable(true);
    else setButtonDisable(false);
  }, [sale, deliveryAddress, deliveryNumber]);

  return (
    <div>
      <TopBar title="Finalizar Pedido" />
      <div
        className="flex flex-col font-sans mt-12 lg:mx-auto space-y-12 px-4 lg:max-w-5xl
        items-center"
      >
        <ProductsList products={ products } />
        <div className="w-full space-y-12">
          <LabeledInput
            value={ deliveryAddress }
            type="text"
            onChange={ setDeliveryAddress }
            label="Rua"
            testId="checkout-street-input"
          />
          <LabeledInput
            value={ deliveryNumber }
            type="text"
            onChange={ setDeliveryNumber }
            label="Número da casa"
            testId="checkout-house-number-input"
          />
        </div>
        <div
          className={ `absolute inset-auto z-100 flex items-center p-12 justify-center
          w-64 h-32 text-xl font-bold bg-green-300 text-green-600 rounded-lg
          ${success ? '' : 'hidden'}` }
        >
          Compra realizada com sucesso!
        </div>
        <div className="lg:w-1/3">
          <Button
            isDisabled={ buttonDisable }
            bgColor="bg-green-600"
            onClick={ () => handleSubmit() }
            testId="checkout-finish-btn"
          >
            Finalizar Pedido
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
