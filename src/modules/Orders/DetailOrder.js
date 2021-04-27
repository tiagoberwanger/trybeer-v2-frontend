import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../axios/api';
import TopBar from '../../design-components/TopBar';
import Loader from '../../design-components/Loader';
import DetailOrderCard from './components/DetailOrderCard';

function DetailOrder() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [sale, setSale] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) history.push('/');
  }, [history]);

  useEffect(() => {
    api
      .get(`/sales/${id}`)
      .then((response) => {
        setSale(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  return (
    loading ? <Loader /> : (
      <div>
        <TopBar title="Detalhes do Pedido" />
        <DetailOrderCard sale={ sale } />
      </div>
    )
  );
}

export default DetailOrder;
