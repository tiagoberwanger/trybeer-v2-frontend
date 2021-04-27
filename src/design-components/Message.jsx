import React from 'react';
import PropTypes from 'prop-types';

function Message({ msg, user }) {
  const timeFormat = (time) => {
    const maxtime = 9;
    const date = new Date(time);
    const hour = date.getHours();
    const hours = hour > maxtime ? hour : `0${hour}`;
    const minute = date.getMinutes();
    const minutes = minute > maxtime ? minute : `0${minute}`;
    return `${hours}:${minutes}`;
  };
  const { from, date, message } = msg;
  const formattedDate = timeFormat(date);
  const isMine = user === from;
  return (
    <div
      className={ `flex flex-col w-1/2 rounded-t-xl
      ${isMine
      ? 'rounded-bl-xl bg-green-200 self-end'
      : 'rounded-br-xl bg-gray-200 self-start'}
      my-4 p-4` }
    >
      <div>
        <span data-testid="nickname" className="text-green-600">
          {from}
        </span>
        {' - '}
        <span data-testid="message-time">{formattedDate}</span>
      </div>
      <p data-testid="text-message">{message}</p>
    </div>
  );
}

Message.propTypes = {
  msg: PropTypes.shape({
    date: PropTypes.date,
    from: PropTypes.string,
    message: PropTypes.string,
    to: PropTypes.string,
    _id: PropTypes.string,
  }),
  user: PropTypes.string,
}.isRequired;

export default Message;
