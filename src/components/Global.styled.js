import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}



body{
    font-family: 'Ubuntu', sans-serif;
}
a{
    text-decoration: none;
    color: white;
    padding: 12px;
    font-weight: 500;
}
h1{
   color: white;
   font-size: 6rem;
}
p{
    padding-top: 15px;
    color: #FFFFFF;
    font-size: 1.3rem;
    font-weight: 300;
}
`;
