import { describe, expect, test } from 'vitest';
import { server } from '../../setup';
import { rest } from 'msw';
import { waitFor } from '@testing-library/react';
import { useGetPodcast } from '../../../application/hooks/useGetPodcast';
import { renderHookWithClient } from '../../utils/test-utils';

describe('useGetPodcast custom hook tests', () => {
  test('Successful query', async () => {
    const { result } = renderHookWithClient(() => useGetPodcast('1234'));

    await waitFor(() => expect(result.current.data).not.toBeNull());
    expect(result.current.isError).toBe(false);
  });

  test('Failed query', async () => {
    server.use(
      rest.get('/get/failed', (_req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );
    const { result } = renderHookWithClient(() => useGetPodcast(''));
    await waitFor(() => expect(result.current.error).toBeNull());
  });
});
