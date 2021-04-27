import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../design-components/Loader';
import SideBarAdmin from '../../../design-components/SideBarAdmin';
import api from '../../../axios/api';

function AdminChats() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const timeFormated = (time) => {
    const maxtime = 9;
    const date = new Date(time);
    const hour = date.getHours();
    const hours = hour > maxtime ? hour : `0${hour}`;
    const minute = date.getMinutes();
    const minutes = minute > maxtime ? minute : `0${minute}`;
    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    api.get('/admin/chats/').then((response) => {
      setChats(response.data);
      setLoading(false);
    });
  }, []);

  return (
    loading ? <Loader /> : (
      <div>
        <SideBarAdmin />
        <div className="container">
          <div className="">
            {chats.length === 0
              ? <p data-testid="text-for-no-conversation">Nenhuma conversa por aqui!</p>
              : chats.map((chat, i) => {
                if (chat.email !== 'Loja') {
                  return (
                    <Link to={ `/admin/chats/${chat.email}` }>
                      <div
                        data-testid="containerChat"
                        key={ i }
                        className="m-3 border-2 border-black text-center max-w-md"
                      >
                        <p data-testid="profile-name">{chat.email}</p>
                        <p data-testid="last-message">
                          Última mensagem às
                          {' '}
                          {timeFormated(chat.lastDate)}
                        </p>
                      </div>
                    </Link>
                  );
                }
                return true;
              })}
          </div>
        </div>
      </div>
    )
  );
}

export default AdminChats;
