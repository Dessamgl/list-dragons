import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import api from '../../service/api';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';

const CreateDragon: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const dragon: any = location.state;

  const [name, setName] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    if (location.state) {
      setName(dragon.name);
      setType(dragon.type);
    }
  }, []);

  const verifyField = name === '' || type === '';

  async function handleSave() {
    await api.post('/api/v1/dragon', {
      name,
      type,
    })
    alert('Cadastrado com sucesso');

    history.push('/list');
  }

  async function handleEdit(id: number) {
    const data = {
      id: dragon.id,
      name,
      type
    }
    await api.put(`/api/v1/dragon/${id}`, data);
    alert('Atualizado com sucesso!')

    history.push('/list');
  }

  return (
    <>
      <Header />
      <Container>
        <h2>{!location.state ? 'Criar' : 'Editar'}</h2>
        <Content>
          <Input
            name="name"
            label="Nome"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />

          <Input
            name="tipo"
            label="Tipo"
            value={type}
            onChange={e => {
              setType(e.target.value);
            }}
          />
          <button type="button" disabled={verifyField} onClick={() => {
            !location.state ? handleSave() : handleEdit(dragon.id)
          }}>
            SALVAR
          </button>
        </Content>
      </Container>
    </>
  );
};

export default CreateDragon;
