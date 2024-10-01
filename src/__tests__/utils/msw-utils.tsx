import { rest } from 'msw';

export const handlers = [
  rest.get('/get/successful', (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
