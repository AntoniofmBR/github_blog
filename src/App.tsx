import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

import { Router } from './router';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}