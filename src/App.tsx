import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './ui/routes/AppRoutes';
import { queryClient } from './infrastructure/react-query/queryClient';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppRoutes />
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
