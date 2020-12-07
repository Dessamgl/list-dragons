import styled from 'styled-components';

export const Container = styled.div`
  background: #c65200;

  header {
    max-width: 1120px;
    padding: 10px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: #fff;
      text-decoration: none;
      font-size: 22px;
      margin-right: auto;
    }

    img {
      width: 100px;
      height: 100px;
    }

    nav {
      padding: 20px;
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
