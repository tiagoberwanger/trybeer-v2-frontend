import React, { useState, useEffect } from 'react';
import Loader from '../../design-components/Loader';
import TopBar from '../../design-components/TopBar';
import api from '../../axios/api';
<<<<<<< HEAD
import runtimeEnv from '@mars/heroku-js-runtime-env' ; 
const env = runtimeEnv(); 

const socket = io(env.REACT_APP_BASE_URL);
=======
import socket from '../../utils/socketClient';
import Message from '../../design-components/Message';
import ChatInput from '../../design-components/ChatInput';
>>>>>>> 41851f7253f8fd1df2a9671d0a6e021400446574

function Chat() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const user = JSON.parse(localStorage.getItem('user')).email;

  useEffect(() => {
    const key = [user, 'Loja'].sort().join('-');
    socket.emit('privateRoom', key);

    api.get('/chat', {
      headers: {
        email: user,
      },
    }).then((response) => {
      setMessages(response.data);
      setLoading(false);
    });
  }, [user]);

  useEffect(() => {
    socket.on('serverMessage', (data) => {
      setMessages([...messages, data]);
    });
  }, [messages]);

  const handleClick = () => {
    const messageObj = {
      from: user,
      to: 'Loja',
      message,
      date: new Date(),
    };
    setMessage('');
    socket.emit('chatMessage', messageObj);
  };

  return (
    loading ? <Loader /> : (
      <div className="flex flex-col items-center rounded-md shadow-sm space-y-4">
        <TopBar
          title="Chat"
          data-testid="top-title"
        />
        <div className="flex w-full justify-center max-w-6xl">
          <div className="flex flex-col w-full self-stretch">
            {
              messages.length !== 0 && messages.map((msg, i) => (
                <Message msg={ msg } key={ `message-${i}` } user={ user } />
              ))
            }
            <ChatInput
              message={ message }
              setMessage={ setMessage }
              handleClick={ handleClick }
            />
          </div>
        </div>
      </div>
    )
  );
}

export default Chat;
