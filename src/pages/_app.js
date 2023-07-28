import AppProvider from '@/context/AppProvider';
import GlobalStyles from '@/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
  )
}
