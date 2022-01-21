import styled from "styled-components";

export const Footers = styled.footer`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  height: 100px;
  background-color: black;
  color: white;

  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    & span {
      padding-bottom: 5px;
    }
    & > div {
      display: flex;
    }
    & img {
      margin: 12px;
    }
  }
`;
