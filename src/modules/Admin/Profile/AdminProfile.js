import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SideBarAdmin from '../../../design-components/SideBarAdmin';
import Loader from '../../../design-components/Loader';
import ContextBeer from '../../../context/ContextBeer';

function AdminProfile() {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const {
    getUser,
  } = useContext(ContextBeer);

  useEffect(() => {
    if (!getUser()) {
      history.push('/');
    }
    setLoading(false);
  }, [getUser, history]);

  return (
    loading ? <Loader /> : (
      <div
        className="text-center rounded-md shadow-sm
    space-y-4 sm:text-xl md:texl-2xl lg:text-3xl"
      >
        <SideBarAdmin />
        <div className="p-10">
          <h1 className="font-bold">Perfil</h1>
          <p data-testid="profile-name" className="italic m-8">
            Nome:
            {' '}
            { getUser() && getUser().name }
          </p>
          <p data-testid="profile-email" className="italic m-8">
            Email:
            {' '}
            {getUser() && getUser().email}
          </p>
        </div>
      </div>
    ));
}

export default AdminProfile;
