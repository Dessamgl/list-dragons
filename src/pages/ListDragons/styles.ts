import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
  padding: 40px 20px;

  h2 {
    color: #363f5f;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #363f5f;
      font-weight: normal;
      justify-content: space-between;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
    }

    td {
      padding: 20px 32px;
      align-items: center;
      border: 0;
      width: 50%;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;
      text-align: center;

      button {
        align-items: center;
        border: none;
        border-radius: 3px;
        padding: 5px;
        justify-content: space-between;
        color: #fff;


        &.edit {
          margin-right: 5px;
          background: #004EAD;
        }

        &.delete {
          background: red;
        }
      }

      &.title {
        color: #363f5f;
        cursor: pointer;
      }

      &.title:hover {
        background: #FDE3D2;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
