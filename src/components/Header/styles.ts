import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const Header = styled.header`
display: flex;
  height: 4.6rem;
  background-color: ${colors.secondary};
  `;
  export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  ul {
    list-style-type: none;
    display: flex;

    height: 100%;
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      
      a {
        text-decoration: none;
        color: var(--black);
      }
    }
  }
`;
  
