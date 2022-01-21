import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}



body{
    font-family: 'Ubuntu', sans-serif;
    width: 100%;
}
a{
    text-decoration: none;
  
}
h1{
   color: ${({ bg }) => bg};
}
p{
   color: ${({ bg }) => bg};
}
`;
