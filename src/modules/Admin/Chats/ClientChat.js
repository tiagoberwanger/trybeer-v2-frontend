import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid';
import Loader from '../../../design-components/Loader';
import SideBarAdmin from '../../../design-components/SideBarAdmin';
import api from '../../../axios/api';
import socket from '../../../utils/socketClient';
import Message from '../../../design-components/Message';
import ChatInput from '../../../design-components/ChatInput';

function ClientChat() {
  const { email } = useParams();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const admin = JSON.parse(localStorage.getItem('user')).email;

  useEffect(() => {
    const key = [email, 'Loja'].sort().join('-');
    socket.emit('privateRoom', key);

    api.get(`/admin/chats/search?q=${email}`).then((response) => {
      setMessages(response.data);
      setLoading(false);
    });
  }, [admin, email]);

  useEffect(() => {
    socket.on('serverMessage', (data) => {
      setMessages([...messages, data]);
    });
  }, [messages]);

  const handleClick = () => {
    const messageObj = {
      from: 'Loja',
      to: email,
      message,
      date: new Date(),
    };
    setMessage('');
    socket.emit('chatMessage', messageObj);
  };

  return (
    loading ? <Loader /> : (
      <div className="rounded-md shadow-sm space-y-4">
        <SideBarAdmin />
        <div className="flex flex-col max-w-6xl">
          <div className="flex content-center justify-center m-4">
            <Link data-testid="back-button" to="/admin/chats">
              <ChevronDoubleLeftIcon className="h-8 w-8" />
            </Link>
            <h3 className="text-xl ml-2 font-bold">
              {`Conversando com ${messages[0].from}`}
            </h3>
          </div>
          {messages.length !== 0 && messages.map((msg, i) => (
            <Message msg={ msg } key={ `message-${i}` } user="Loja" />
          ))}
        </div>
        <ChatInput
          message={ message }
          setMessage={ setMessage }
          handleClick={ handleClick }
        />
      </div>
    )
  );
}

export default ClientChat;
