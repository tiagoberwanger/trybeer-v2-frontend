import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../axios/api';
import TopBar from '../../design-components/TopBar';
import Loader from '../../design-components/Loader';
import CardClient from './components/CardClient';

function Orders() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) history.push('/');
  }, [history]);

  useEffect(() => {
    api
      .get('/sales')
      .then((response) => {
        console.log(response.data);
        setSales(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    loading ? <Loader /> : (
      <div>
        <TopBar title="Meus Pedidos" />
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="sm:flex sm:flex-wrap sm:items-center sm:justify-center">
            { sales.map((pedido, index) => (
              <Link key={ pedido.id } to={ `/orders/${pedido.id}` }>
                <CardClient key={ pedido.id } pedido={ pedido } IndexId={ index } />
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default Orders;
