import styled from "styled-components";

export const Footers = styled.footer`
  display: flex;
  justify-content: ${({justify})=> justify};
  align-items: ${({align})=> align};
  height: 80px;
  width: 100vw;
  background-color: black;
  color: white;


`;
