import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';

import {Container} from './styles';

const fakeEmail = 'user@pageDragon.com.br';
const fakePassword = '123';

const Login:  React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const verifyField = email === '' || password === '';

  function LoginPage() {
    const auth = {
      email,
      password
    }
    if(email !== fakeEmail || password !== fakePassword) {
     return alert('Credenciais incorretas')
    }

    localStorage.setItem('authToken', JSON.stringify(auth))
      setTimeout(() => {
        history.push('/list');
      }, 700)
  }

  return (
    <Container>
      <h2>Login</h2>
    <Input
      name="email"
      label="Email"
      value={email}
      onChange={e => {
      setEmail(e.target.value);
    }}>
    </Input>

    <Input
      name="password"
      label="Senha"
      value={password}
      onChange={e => {
      setPassword(e.target.value);
    }}>
    </Input>

    <button disabled={verifyField} onClick={LoginPage}>ENTRAR</button>
    </Container>
  )

}

export default Login;
