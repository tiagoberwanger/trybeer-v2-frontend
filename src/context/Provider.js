import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextBeer from './ContextBeer';
import api from '../axios/api';

function Provider({ children }) {
  const storedSale = JSON.parse(localStorage.getItem('sale'));
  const isSaleStored = storedSale && storedSale.length !== 0;
  const initialReduce = 0;

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [products, setProducts] = useState([]);
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerIsDisabled, setRegisterIsDisabled] = useState('');
  const [sale, setSale] = useState(storedSale);
  const [total, setTotal] = useState(0);
  const [stringTotal, setStringTotal] = useState('R$ 0,00');

  useEffect(() => {
    if (!isSaleStored) {
      const initialSale = products
        .map(({ id, quantity, price }) => ({ id, quantity, price }));
      setSale(initialSale);
    }
  }, [products, isSaleStored]);

  useEffect(() => {
    if (sale && sale.length !== 0) {
      const sumTotal = sale
        .reduce((acc, curr) => (acc + (curr.price) * curr.quantity), initialReduce)
        .toFixed(2);
      setTotal(sumTotal);
      if (sumTotal === 0) setStringTotal('R$ 0,00');
      else {
        const formatTotal = `R$ ${sumTotal.replace('.', ',')}`;
        setStringTotal(formatTotal);
      }
    }
    localStorage.setItem('sale', JSON.stringify(sale));
  }, [sale]);

  useEffect(() => {
    api
      .get('/products')
      .then((response) => response.data)
      .then((productsList) => {
        setProducts(productsList);
      });
  }, []);

  const getUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  };

  const setUser = (data) => {
    const user = localStorage.setItem('user', JSON.stringify(data));
    return user;
  };

  const clickMinus = (id, quantity, price) => {
    if (quantity <= 0) return;
    const newProduct = { id, quantity: (quantity - 1), price };
    const newSale = sale.filter((prods) => prods.id !== id);
    console.log('new sale in provider minus: ', newSale);
    newSale.push(newProduct);
    newSale.sort((a, b) => a.id - b.id);
    setSale(newSale);
  };

  const clickPlus = (id, quantity, price) => {
    const newProduct = { id, quantity: (quantity + 1), price };
    const newSale = sale.filter((prods) => prods.id !== id);
    newSale.push(newProduct);
    newSale.sort((a, b) => a.id - b.id);
    setSale(newSale);
  };

  const findProduct = (id) => {
    const productById = products.find((prod) => prod.id === id);
    return productById;
  };

  const removeProduct = (id) => {
    const removedSale = sale.filter((prod) => prod.id !== id);
    removedSale.sort((a, b) => a.id - b.id);
    setSale(removedSale);
  };

  const initiateSale = () => {
    const initialSale = products
      .map(({ id, quantity, price }) => ({ id, quantity, price }));
    setSale(initialSale);
  };

  const contextData = {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    isDisabled,
    setIsDisabled,
    products,
    setProducts,
    registerName,
    setRegisterName,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    registerIsDisabled,
    setRegisterIsDisabled,
    sale,
    setSale,
    total,
    setTotal,
    stringTotal,
    setStringTotal,
    clickMinus,
    clickPlus,
    findProduct,
    removeProduct,
    initiateSale,
    getUser,
    setUser,
  };

  return (
    <ContextBeer.Provider value={ contextData }>
      { children }
    </ContextBeer.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
