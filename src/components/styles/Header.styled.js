import styled from "styled-components";

export const Headers = styled.header`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  height: 100px;
  max-width: 100vw;
  background-color: #011116;
  box-shadow: 0 0 30px solid #011116;
  color: white;
  position: relative;
  z-index: 100;
  
  & nav a {
    color: white;
    padding: 12px;
    font-weight: 600;
    letter-spacing: 2px;
  }
  & img {
    height: 70px;
    width: 70px;
  }
`;

export const Light = styled.div`
  display: flex;
  justify-items: flex-end;
  margin-right: 100px;

  & button {
    border: none;
    background: none;

    &:hover {
      cursor: pointer;
    }

    & img {
      height: 34px;
      width: 34px;


      &:hover {
        transition: 0.3s ease-in-out;
        transform: scale(0.8);
      }
    }
  }
`;
