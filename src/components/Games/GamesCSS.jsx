import styled from 'styled-components';

const GamesCSS = styled.div`
  button {
    display: block;
    margin: auto;
    padding: 15px 25px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #7a4caf;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #340f5f;
  }
  button:active {
    transform: translateY(4px);
  }
  img {
    width: 450px;
    height: 350px;
  }
`;

export default GamesCSS;
