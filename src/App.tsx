import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import * as theme from './styles/themes';

export default function App() {
  return (
    <ThemeProvider theme={theme['defaultTheme']}>
      <GlobalStyles />
      <p>Olá, mundo!</p>
    </ThemeProvider>
  );
}
