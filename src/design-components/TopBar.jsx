import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import SideBarMenu from './SideBarMenu';

function TopBar(props) {
  const { title } = props;
  const [sidebar, setSidebar] = useState(false);
  return (
    <header className="relative h-16 w-full bg-black flex">
      <SideBarMenu visible={ sidebar } />
      <button
        type="button"
        data-testid="top-hamburguer"
        onClick={ () => setSidebar(!sidebar) }
        className="absolute top-0 left-0 bg-gray-200
        h-16 w-16 text-3xl flex justify-center items-center"
      >
        <FaIcons.FaBars />
      </button>
      <div className="flex w-full justify-center items-center">
        <h1 data-testid="top-title" className="flex-grow text-center text-white text-3xl">
          {title}
        </h1>
      </div>
    </header>
  );
}

TopBar.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default TopBar;
