import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
  padding: 40px 20px;

  h2 {
    color: #363f5f;
  }

  button {
    padding: 10px;
    margin-top: 15px;
    margin-left: auto;
    display: flex;
    align-items: center;
    height: 50px;
    border: none;
    border-radius: 5px;
    background: #59df01;
    color: #fff;
  }

  button:hover {
    background: #56c20e;
  }

  button:disabled {
    background: #c9d7c0;
    cursor: default;
  }
`;

export const Content = styled.section`
  margin-top: 64px;
`;
