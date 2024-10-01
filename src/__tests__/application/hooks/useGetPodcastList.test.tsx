import { describe, expect, test } from 'vitest';
import { server } from '../../setup';
import { rest } from 'msw';
import { waitFor } from '@testing-library/react';
import { useGetPodcastList } from '../../../application/hooks/useGetPodcastList';
import { renderHookWithClient } from '../../utils/test-utils';

describe('useGetPodcastList custom hook tests', () => {
  test('Successful query', async () => {
    const { result } = renderHookWithClient(() => useGetPodcastList());

    await waitFor(() => expect(result.current.data).not.toBeNull);
    expect(result.current.isError).toBe(false);
  });

  test('Failed query', async () => {
    server.use(
      rest.get('/list/failed', (_req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );
    const { result } = renderHookWithClient(() => useGetPodcastList());

    await waitFor(() => expect(result.current.error).not.toBeNull);
  });
});
