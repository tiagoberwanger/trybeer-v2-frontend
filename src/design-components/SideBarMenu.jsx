import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

function SideBarMenu({ visible }) {
  const history = useHistory();
  const onClick = () => {
    localStorage.removeItem('user');
    clearTimeout();
    history.push('/');
  };

  return (
    <div
      className={ `${visible ? '' : 'invisible'} absolute top-16 left-0 w-32 lg:w-64 z-30
      min-h-screen side-menu-container flex flex-col space-y-16 items-center bg-black` }
    >
      <Link to="/products">
        <Button bgColor="black" testId="side-menu-item-products">
          Produtos
        </Button>
      </Link>
      <Link to="/orders">
        <Button bgColor="black" testId="side-menu-item-my-orders">
          Meus pedidos
        </Button>
      </Link>
      <Link to="/profile">
        <Button bgColor="black" testId="side-menu-item-my-profile">
          Meu Perfil
        </Button>
      </Link>
      <Link to="/chat">
        <Button bgColor="black" testId="side-menu-chat">
          Conversar com a loja
        </Button>
      </Link>
      <div className="bottom-12">
        <Button
          onClick={ () => onClick() }
          bgColor="bg-red-400"
          testId="side-menu-item-logout"
        >
          Sair
        </Button>
      </div>
    </div>
  );
}

SideBarMenu.propTypes = {
  visible: PropTypes.bool,
};

SideBarMenu.defaultProps = {
  visible: false,
};

export default SideBarMenu;
