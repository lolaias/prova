import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Amatic SC', cursive;
  }
`
export const colors = {
  primary: "#586875",
  secondarLight:"#A5C8CA",
  secondary: "#10898B",
  third: " #E2D9C2",
  black: "#000",
  white: "#fff"
}

export const Main = styled.main`
  min-height: calc(100vh - 9rem);
  `