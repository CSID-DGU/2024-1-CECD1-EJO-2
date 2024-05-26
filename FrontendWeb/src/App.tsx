import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import theme from '@/theme';
import { Suspense } from 'react';
import useScrollToTop from '@/hooks/useScrollToTop';

const App = () => {
  useScrollToTop();

  return (
    <Suspense>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
