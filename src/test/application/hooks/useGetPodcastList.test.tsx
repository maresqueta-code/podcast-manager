import { describe, expect, test } from 'vitest';
import { server } from '../../setup';
import { rest } from 'msw';
import { renderHook, waitFor } from '@testing-library/react';
import { createWrapper } from '../../utils/utils';
import { useGetPodcastList } from '../../../application/hooks/useGetPodcastList';

describe('useGetPodcastList custom hook tests', () => {
  test('Successful query', async () => {
    const { result } = renderHook(() => useGetPodcastList(), {
      wrapper: createWrapper(),
    });
    await waitFor(() => expect(result.current.data).not.toBeNull);
    expect(result.current.isError).toBe(false);
  });

  test('Failed query', async () => {
    server.use(
      rest.get('/list/failed', (_req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );
    const { result } = renderHook(() => useGetPodcastList(), {
      wrapper: createWrapper(),
    });
    await waitFor(() => expect(result.current.error).not.toBeNull);
  });
});
