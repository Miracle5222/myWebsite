import styled from "styled-components";

export const Headers = styled.header`
  display: flex;
  justify-content: ${({justify})=> justify};
  align-items: ${({align})=> align};
  height: 100px;
  width: 100vw;
  background-color: black;
  color: white;

  & img{
      height: 70px;
      width: 70px;
  }
`;
