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
  .pic {
    width: 450px;
    height: 350px;
    border-radius: 30px;
    transition: 0.5s;
  }

  .pic:hover {
    opacity: 0.7;
  }

  .Games {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .Details p {
    text-align: center;
  }
  .bin {
    width: 35px;
    height: 35px;
  }
`;

export default GamesCSS;
