import React from 'react';
import PropTypes from 'prop-types';

function LabeledInput({
  value,
  label,
  id,
  name,
  type,
  // autoComplete,
  testId,
  onChange,
  readOnly,
}) {
  return (
    <div>
      <label className="text-xl" htmlFor={ id }>{ label }</label>
      <input
        readOnly={ readOnly }
        value={ value }
        data-testid={ testId }
        id={ id }
        name={ name }
        type={ type }
        // autoComplete={ autoComplete }
        // required
        onChange={ ({ target }) => onChange(target.value) }
        className="relative block h-12 w-full px-3 py-2 border
          border-gray-300 text-gray-900 shadow-lg rounded-md
          focus:outline-none focus:ring-yellow-500 focus:border-yellow-500
          focus:z-10 sm:text-sm"
      />
    </div>
  );
}

LabeledInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  // autoComplete: PropTypes.string,
  testId: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default LabeledInput;
