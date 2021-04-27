import React, { useContext } from 'react';
import LabeledInput from '../../../design-components/LabeledInput';
import ContextBeer from '../../../context/ContextBeer';

function LoginInputs() {
  const {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
  } = useContext(ContextBeer);

  return (
    <div className="rounded-md shadow-sm space-y-4">
      <LabeledInput
        value={ loginEmail }
        testId="email-input"
        label="Email"
        id="email-address"
        name="email"
        type="email"
        onChange={ setLoginEmail }
        // autoComplete="email"
      />
      <LabeledInput
        value={ loginPassword }
        testId="password-input"
        label="Senha"
        id="password"
        name="password"
        type="password"
        onChange={ setLoginPassword }
        // autoComplete="password"
      />
    </div>
  );
}

export default LoginInputs;
