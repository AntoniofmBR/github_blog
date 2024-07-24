import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['base-border']};
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['white']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem = 'Nunito', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 7px;
    overflow: auto;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme['base-backgrounds']};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme['blue']};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
