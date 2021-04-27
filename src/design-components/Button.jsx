import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { children, testId, bgColor, isDisabled, onClick } = props;
  return (
    <button
      disabled={ isDisabled }
      type="button"
      onClick={ onClick }
      data-testid={ testId }
      className={ `relative w-full flex justify-center py-2 px-4 border
        border-transparent text-xl font-medium rounded-md text-white ${bgColor}
        hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-yellow-500` }
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  testId: PropTypes.string,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  isDisabled: PropTypes.bool,
}.isRequired;

export default Button;
