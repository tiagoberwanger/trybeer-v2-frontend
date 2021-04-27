import React, { useContext } from 'react';
import LabeledInput from '../../../design-components/LabeledInput';
import ContextBeer from '../../../context/ContextBeer';

function RegisterInputs() {
  const {
    registerName,
    setRegisterName,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
  } = useContext(ContextBeer);

  return (
    <div className="rounded-md shadow-sm space-y-4">
      <LabeledInput
        value={ registerName }
        testId="signup-name"
        label="Nome"
        id="name"
        name="name"
        type="name"
        onChange={ setRegisterName }
        autoComplete="name"
      />
      <LabeledInput
        value={ registerEmail }
        testId="signup-email"
        label="Email"
        id="email-address"
        name="email"
        type="email"
        onChange={ setRegisterEmail }
        autoComplete="email"
      />
      <LabeledInput
        value={ registerPassword }
        testId="signup-password"
        label="Senha"
        id="password"
        name="password"
        type="password"
        onChange={ setRegisterPassword }
        autoComplete="password"
      />
    </div>
  );
}

export default RegisterInputs;
