import styled from '@emotion/styled';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Router from './Router';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <div style={{ fontSize: '16px' }}>
      <QueryClientProvider client={queryClient}>
        <DesktopWrapper>
          <Router />
        </DesktopWrapper>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </div>
  );
};

export default App;

const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  scroll-behavior: smooth;
`;
