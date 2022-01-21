import styled from "styled-components";

export const Head = styled.div`
  & h1 {
    color: ${({ bg }) => bg};
    font-size: 6rem;
  }
  & p {
    padding-top: 15px;
    color: ${({ color }) => color};
    font-size: 1.3rem;
    font-weight: 300;
    text-align: center;
  }
`;
