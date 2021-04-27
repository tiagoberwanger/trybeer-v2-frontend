import React from 'react';
import LabeledInput from '../../../design-components/LabeledInput';

function Inputs() {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  return (
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
  );
}

export default Inputs;
