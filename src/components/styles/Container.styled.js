import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  flex-direction: column;
  align-items: ${(props) => props.align};
  min-height: 100vh;
  background-color: ${({ bg }) => bg};
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1280px;
  box-shadow: 0 0 30px rgba(40, 40, 40, 0.1);
  min-height: 100vh;
  background-color: ${({ bg }) => bg};
`;
