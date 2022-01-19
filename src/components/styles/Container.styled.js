import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  min-height: 100vh;
  background-color: ${({bg})=> bg };
`;
