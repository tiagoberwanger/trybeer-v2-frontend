import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../axios/api';
import Button from '../../design-components/Button';
import RegisterInputs from './components/RegisterInputs';
import ContextBeer from '../../context/ContextBeer';
import Loader from '../../design-components/Loader';
import registerValidation from '../../utils/registerValidation';

function Register() {
  const [loading, setLoading] = useState(false);
  const STATUS_CONFLICT = 409;
  const history = useHistory();
  const [duplicated, setDuplicated] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const {
    registerName,
    registerEmail,
    registerPassword,
  } = useContext(ContextBeer);

  useEffect(() => {
    registerValidation(registerName, registerEmail, registerPassword, setIsDisabled);
    // eslint-disable-next-line
  }, [registerName, registerEmail, registerPassword]);

  const isChecked = () => (document.getElementById('wannasell').checked);

  const signUpOnClick = () => {
    const whatSTheRole = isChecked() ? 'administrator' : 'client';
    setLoading(true);
    const token = api
      .post('/register', {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
        role: whatSTheRole })
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
        setLoading(false);
        if (response.data.role === 'administrator') history.push('/admin/orders');
        if (response.data.role === 'client') history.push('/products');
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === STATUS_CONFLICT) {
          setDuplicated(err.response.data.message);
        }
      });
    return token;
  };

  return (
    loading ? <Loader /> : (
      <div
        className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4
      sm:px-6 lg:px-8"
      >
        <div className="max-w-md w-full space-y-8">
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <RegisterInputs />
            <Button
              onClick={ () => signUpOnClick() }
              isDisabled={ isDisabled }
              bgColor="bg-green-600"
              testId="signup-btn"
            >
              Cadastrar
            </Button>
            {duplicated && <p className="my-10">{duplicated}</p>}
            <label htmlFor="wannasell">
              <input
                className="mt-5"
                name="wannasell"
                type="checkbox"
                data-testid="signup-seller"
                id="wannasell"
                label="Quero vender"
                value="wannasell"
              />
              Quero vender
            </label>
          </form>
        </div>
      </div>
    ));
}

export default Register;
