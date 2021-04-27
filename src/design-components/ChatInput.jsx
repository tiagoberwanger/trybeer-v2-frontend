import React from 'react';
import PropTypes from 'prop-types';

function ChatInput({ setMessage, message, handleClick }) {
  return (
    <div className="flex items-center w-full">
      <input
        className="flex-grow bg-gray-200 my-2 p-2 h-10 rounded-l-lg"
        type="text"
        data-testid="message-input"
        value={ message }
        onChange={ (e) => setMessage(e.target.value) }
      />
      <button
        type="button"
        data-testid="send-message"
        onClick={ handleClick }
        className="bg-green-700 text-white my-2 px-4 h-10 w-24 rounded-r-lg"
      >
        Enviar
      </button>
    </div>
  );
}

ChatInput.propTypes = {
  message: PropTypes.string,
  setMessage: PropTypes.func,
  handleClick: PropTypes.func,
}.isRequired;

export default ChatInput;
