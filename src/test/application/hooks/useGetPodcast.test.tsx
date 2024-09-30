import { describe, expect, test } from 'vitest';
import { server } from '../../setup';
import { rest } from 'msw';
import { renderHook, waitFor } from '@testing-library/react';
import { createWrapper } from '../../utils/utils';
import { useGetPodcast } from '../../../application/hooks/useGetPodcast';

describe('useGetPodcast custom hook tests', () => {
  test('Successful query', async () => {
    const { result } = renderHook(() => useGetPodcast('1234'), {
      wrapper: createWrapper(),
    });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.isError).toBe(false);
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).not.toBeNull();
  });

  test('Failed query', async () => {
    server.use(
      rest.get('/get/failed', (_req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );
    const { result } = renderHook(() => useGetPodcast(''), {
      wrapper: createWrapper(),
    });
    await waitFor(() => expect(result.current.error).not.toBeNull);
  });
});
