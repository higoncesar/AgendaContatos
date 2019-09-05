import styled from 'styled-components';

export const ModalContent = styled.div`
  width: 400px;
  padding: 30px;
  text-align: center;
  h1 {
    margin: 0;
    padding: 0;
    font-size: 30px;
    font-weight: bolder;
    background: -webkit-linear-gradient(135deg, #f05f57 10%, #360940 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  form {
    display: flex;
    flex-direction: column;

    input {
      height: 40px;
      margin-top: 15px;
      padding: 10px;
      border: solid 1px #360940;
      border-radius: 4px;
      ::placeholder {
        color: #360940;
        font-weight: bold;
      }
    }

    span {
      margin-top: 5px;
      color: #e53935;
      font-weight: bold;
    }

    div {
      margin-top: 20px;
      display: flex;
      justify-content: space-around;

      button {
        border: 0;
        border-radius: 4px;
        color: #fff;
        width: 90px;
        height: 40px;

        :first-child {
          background: #e53935;
        }

        :last-child {
          background: #4caf50;
        }
      }
    }
  }
`;
