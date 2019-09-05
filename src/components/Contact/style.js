import styled from 'styled-components';

export const Content = styled.div`
  margin: 0px 15px 20px 0px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 250px;
  height: 300px;
  border-radius: 5px;

  img {
    border-radius: 50%;
    width: 70px;
    border: solid 1px #360940;
  }

  h3 {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  strong {
    margin: 10px 0px 5px 0px;
    color: #353535;
  }
  p {
    color: #696969;
  }

  div {
    display: flex;
    button {
      margin: 15px 10px 0px;
      border: 0;
      border-radius: 4px;
      color: #fff;
      width: 70px;
      height: 40px;
      font-size: 14px;

      :first-child {
        background: #e53935;
      }

      :last-child {
        background: #1565c0;
      }
    }
  }
`;
