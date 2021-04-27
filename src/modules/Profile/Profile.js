import React, { useState, useContext, useEffect } from 'react';
import api from '../../axios/api';
import LabeledInput from '../../design-components/LabeledInput';
import Button from '../../design-components/Button';
import ContextBeer from '../../context/ContextBeer';
import Loader from '../../design-components/Loader';
import TopBar from '../../design-components/TopBar';

function Profile() {
  const [loading, setLoading] = useState(false);
  const [profileName, setProfileName] = useState('');
  const [profileEmail, setProfileEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [updatedMessage, setUpdatedMessage] = useState('');
  const {
    getUser,
    setUser,
  } = useContext(ContextBeer);

  function saveOnClick() {
    setLoading(true);
    api.put('/profile', {
      name: profileName,
      email: profileEmail,
    })
      .then((response) => {
        console.log(response.data);
        setUser({ ...getUser(), name: profileName });
        setLoading(false);
        setIsDisabled(true);
        setUpdatedMessage('Atualização concluída com sucesso');
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  const handleNameChange = (value) => {
    setProfileName(value);
  };

  useEffect(() => {
    const userData = getUser();
    setProfileName(userData.name);
    setProfileEmail(userData.email);
  }, [getUser]);

  useEffect(() => {
    const isButtonEnabled = (getUser().name !== profileName);
    setIsDisabled(!isButtonEnabled);
  }, [profileName, getUser]);

  return (
    loading ? <Loader /> : (
      <div className="rounded-md shadow-sm space-y-4">
        <TopBar
          title="Meu perfil"
          data-testid="top-title"
        />
        <div className="sm:m-8 md:m-16 lg:m-24 xl:m-36 xl:m-48">
          <LabeledInput
            value={ profileName }
            testId="profile-name-input"
            label="Nome"
            id="name"
            name="name"
            type="name"
            onChange={ handleNameChange }
            autoComplete="name"
          />
          <LabeledInput
            value={ profileEmail }
            testId="profile-email-input"
            label="Email"
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            onChange={ profileEmail }
            readOnly
          />
          <Button
            onClick={ () => saveOnClick() }
            isDisabled={ isDisabled }
            bgColor="bg-green-600"
            testId="profile-save-btn"
          >
            Salvar
          </Button>
          <span>{updatedMessage}</span>
        </div>
      </div>
    ));
}

export default Profile;
