import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { useLocation } from 'react-router-dom';

import api from '../../service/api';

import Header from '../../components/Header';

import { Container } from './styles';

interface DragonData {
  createdAt: string;
  histories: any[];
  id: number;
  name: string;
  type: string;
}

const DetailDragon: React.FC = () => {
  const [dragon, setDragon] = useState<DragonData>();
  const [date, setDate] = useState<string>();
  const location = useLocation();

  const {id}: any = location.state;

  useEffect(() => {
    api.get(`/api/v1/dragon/${id}`).then(response => {
      setDragon(response.data);
        const parseDate = parseISO(response.data.createdAt)
        setDate(format(parseDate, 'dd/MM/yyyy'));
    })
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h2>Detalhes</h2>
          <div>
            <h3>Data de criação:</h3>
            <span>{date}</span>
          </div>
          <div>
            <h3>Nome:</h3>
            <span>{dragon?.name}</span>
          </div>
          <div>
            <h3>Tipo:</h3>
            <span>{dragon?.type}</span>
          </div>
      </Container>
    </>
  );
};

export default DetailDragon;
