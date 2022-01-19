import styled from "styled-components";

export const SButton = styled.button`
  border: none;
  background-color: ${({ bg }) => bg};
  color: white;
  border-radius: 8px;
  cursor: pointer;
  padding: 12px 15px;

  &:hover {
    background-color: #2B2B2B;
    
  }
  &:active{
    background-color: #2B2B2B;
    opacity: .8;
  }
`;
