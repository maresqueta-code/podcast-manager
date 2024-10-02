export const ROUTE_URLS = {
  HOME_PAGE: '/',
  PODCAST: '/podcast/',
  PODCAST_ID: ':podcastId',
  PODCAST_PAGE: '/podcast/:podcastId',
  EPISODE: '/episode/',
  EPISODE_PAGE: ':podcastId/episode/:episodeId',
  ERROR_PAGE: '/error',
  NOT_FOUND_PAGE: '*',
};

export const ERROR_MESSAGES = {
  NOT_FOUND: 'Page not found.',
  NETWORK_ISSUES: 'Network issues.',
  SERVICE_UNAVAILABLE: 'Service unavailable. Try reloading the page or try again later.',
};
