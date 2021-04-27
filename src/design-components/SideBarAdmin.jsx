import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from './Button';

function SideBarAdmin() {
  const history = useHistory();

  const onClick = () => {
    localStorage.removeItem('user');
    history.push('/');
  };

  return (
    <div
      className="bg-black relative admin-side-bar-container flex flex-col items-center"
    >
      <h1 className="text-white text-3xl">TryBeer</h1>
      <Link to="/admin/orders">
        <Button
          bgColor="black"
          testId="side-menu-item-orders"
        >
          Pedidos
        </Button>
      </Link>
      <Link to="/admin/profile">
        <Button
          bgColor="black"
          testId="side-menu-item-profile"
        >
          Perfil
        </Button>
      </Link>
      <Link to="/admin/chats">
        <Button
          bgColor="black"
          testId="side-menu-item-chat"
        >
          Conversas
        </Button>
      </Link>
      <div className="bottom-12">
        <Button
          onClick={ () => onClick() }
          bgColor="black"
          testId="side-menu-item-logout"
        >
          Sair
        </Button>
      </div>
    </div>
  );
}
export default SideBarAdmin;
