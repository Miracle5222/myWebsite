import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  flex-direction: column;
  align-items: ${(props) => props.align};
  min-height: 100vh;
  background-color: ${({ bg }) => bg};
`;

export const Light = styled.div`
  display: flex;
  align-items: flex-end;

  & img {
    height: 40px;
    width: 40px;
  }
  &:hover {
    cursor: pointer;
  }
`;
