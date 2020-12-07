import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../service/api';

import Header from '../../components/Header';

import { TableContainer, Container } from './styles';

interface DragonData {
  id: number;
  name: string;
  type: string;
}

const ListDragons: React.FC = () => {
  const history = useHistory();

  const [dragons, setDragons] = useState<DragonData[]>([]);

  useEffect(() => {
    getDragons();
  }, []);

  async function getDragons() {
    api.get('/api/v1/dragon').then(response => {
      const dragonsList: DragonData[] = response.data;
      const orderDragons = dragonsList.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1
        }
        return 0;
      });
      setDragons(orderDragons);
    });
  }

  async function handleDelete(id: number) {
    await api.delete(`/api/v1/dragon/${id}`);
    await getDragons();
  }

  return (
    <>
      <Header />
      <Container>
      <h2>Lista</h2>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {dragons.map(dragon => (
                <tr key={dragon.id}>
                  <td className="title" onClick={() => history.push({pathname: '/detailDragon', state: dragon })}>{dragon.name}</td>
                  <td>
                    <button className="edit" type="button" onClick={() => {
                      history.push({pathname: '/createDragon', state: dragon });
                    }}>
                      Editar
                    </button>
                    <button
                      className="delete"
                      onClick={() => {handleDelete(dragon.id)}}
                      type="button"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default ListDragons;
