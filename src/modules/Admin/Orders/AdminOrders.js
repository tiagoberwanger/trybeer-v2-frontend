import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../axios/api';
import SideBarAdmin from '../../../design-components/SideBarAdmin';
import CardAdmin from '../../../design-components/CardAdmin';
import Loader from '../../../design-components/Loader';
// import mockPedidos from '../../../services/mockPedidos'

function AdminOrders() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api
      .get('/sales')
      .then((response) => {
        setSales(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    loading ? <Loader /> : (
      <div>
        <SideBarAdmin />
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="sm:flex sm:flex-wrap sm:items-center sm:justify-center">
            { sales.map((pedido, index) => (
              <Link key={ pedido.id } to={ `/admin/orders/${pedido.id}` }>
                <CardAdmin key={ pedido.id } pedido={ pedido } IndexId={ index } />
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default AdminOrders;
