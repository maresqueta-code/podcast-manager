export const BASE_URL: string = import.meta.env['VITE_API_URL'];

export const API_ENDPOINTS = {
  PODCAST_LIST: 'us/rss/toppodcasts/limit=100/genre=1310/json',
  PODCAST_DETAIL: 'lookup?country=US&media=podcast&entity=podcastEpisode&limit=50&id=',
  CORS_PROXY: 'https://api.allorigins.win/get?url=',
};
