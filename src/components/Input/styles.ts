import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  label {
    font-size: 16px;
    color: #363f5f;
  }

  input {
    width: 100%;
    color: #969cb3;
    border: none;
    border-radius: 5px;
    font-weight: normal;
    padding: 10px 15px;
    margin-bottom: 10px;
    justify-content: space-between;
    font-size: 16px;
    line-height: 24px;
    transition: all 0.2s;
  }

  input:focus {
    border: 1px solid #c65200;
  }

  input:hover {
    background-color: #FDE3D2;
  }
`;
