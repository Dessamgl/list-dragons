import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Smaug from '../../assets/images/smaug.png';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <img className="logo" src={Smaug} alt="smaugDragon" />
        <h2>Dragões</h2>
        <nav>
          <Link to="/list">Listagem</Link>
          <Link to="/createDragon">Criar novo</Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
