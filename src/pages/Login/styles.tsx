import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-top: -40px;
  height: 100vh;
  max-width: 500px;
  padding: 40px 20px;
  align-items: center;

  h2 {
    color: #363f5f;
  }

  button {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    height: 50px;
    background: #FF6600;
    border: none;
    border-radius: 5px;
    color: #fff;
  }

  button:hover {
    background: #c65200;
  }

  button:disabled {
    background: #F7D2B9;
    cursor: default;
  }
`;
