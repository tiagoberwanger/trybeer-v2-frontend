import React from 'react';
import PropTypes from 'prop-types';

const ButtonDelivered = (props) => {
  const { handleClick, children, testid } = props;
  return (
    <button
      id="deliver-button"
      type="button"
      className="p-4 bg-green-300 hover:bg-gray-500"
      data-testid={ testid }
      onClick={ () => handleClick() }
    >
      {' '}
      {children}
      {' '}
    </button>
  );
};

export default ButtonDelivered;

ButtonDelivered.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  testid: PropTypes.string.isRequired,
};
