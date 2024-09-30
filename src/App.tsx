import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Podcast Manager</h1>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
