import { ThemeProvider } from 'styled-components';
import * as theme from './styles/themes';

export default function App() {
  return (
    <ThemeProvider theme={theme['defaultTheme']}>
      <p>Olá, mundo!</p>
    </ThemeProvider>
  );
}
