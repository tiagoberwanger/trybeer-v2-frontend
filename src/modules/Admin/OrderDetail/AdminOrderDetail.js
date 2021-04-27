import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SideBarAdmin from '../../../design-components/SideBarAdmin';
import Loader from '../../../design-components/Loader';
import DetailAdminCard from './components/DetailAdminCard';
import ButtonGroup from './components/ButtonGroup';
import api from '../../../axios/api'

const styling = 'text-sm md:text-base lg:text-lg text-green-500';

function AdminOrderDetail() {
  const [loading, setLoading] = useState(true);
  const [sale, setSale] = useState({});
  const [status, setStatus] = useState('');

  const { id } = useParams();

  useEffect(() => {
    api.get(`/sales/${id}`)
      .then((response) => {
        setSale(response.data);
        setStatus(response.data.status);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [id, status]);

  return (
    loading ? <Loader /> : (
      <div>
        <SideBarAdmin />
        <DetailAdminCard sale={ sale } status={ status } />
        <div
          className="flex justify-center"
        >
          {(status === 'Entregue')
            ? <span className={ styling }>Pedido Entregue!</span>
            : <ButtonGroup setStatus={ setStatus } id={ id } />}
        </div>
      </div>
    )
  );
}

export default AdminOrderDetail;
