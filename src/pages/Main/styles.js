import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 90px 40px 70px;
`;

export const Header = styled.div`
  margin: 0;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  margin-bottom: 40px;
  background: #ffff;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 45px;
    font-weight: bolder;
    background: -webkit-linear-gradient(135deg, #f05f57 10%, #360940 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
