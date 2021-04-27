import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TopBar from '../../design-components/TopBar';
import CartButton from '../../design-components/CartButton';
import Loader from '../../design-components/Loader';
import Card from '../../design-components/Card';
import ContextBeer from '../../context/ContextBeer';

function Products() {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const {
    sale,
    getUser,
  } = useContext(ContextBeer);

  useEffect(() => {
    const user = getUser();
    if (!user) history.push('/');
    setLoading(false);
  }, [getUser, history]);

  return (
    loading ? <Loader /> : (
      <div>
        <TopBar title="TryBeer" />
        <div className="flex flex-wrap justify-center mb-40 lg:p-32">
          {
            sale && sale.map((product, index) => (
              <Card product={ product } testIdNumber={ index } key={ product.id } />
            ))
          }
        </div>
        <CartButton />
      </div>
    ));
}

export default Products;
