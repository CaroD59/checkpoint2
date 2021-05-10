import styled from 'styled-components';

const HeaderCSS = styled.header`
  /* text-align: center; */
  font-size: 1.2em;
  height: 200px;
  background: linear-gradient(45deg, rgb(156, 14, 156), midnightblue);
  font-family: 'Arial';

  .BigContainer {
    display: flex;
    justify-content: space-around;
  }

  .Header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 20px;
    position: relative;
    font-weight: bold;
  }

  .Header li {
    list-style: none;
    margin-left: 15px;
    margin-right: 15px;
  }

  .Header li a {
    color: #fbfbfb;
    text-decoration: none;
  }

  .Header li a:hover {
    color: black;
    font-weight: bold;
  }

  .Hello {
    text-align: center;
    font-size: 50px;
  }
`;

export default HeaderCSS;
