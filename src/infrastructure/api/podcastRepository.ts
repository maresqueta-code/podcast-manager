import { API_ENDPOINTS, BASE_URL } from './apiConstants';
import type { Episode, PodcastResponse } from './podcastItem.types';
import type { Podcast, Podcasts } from './podcastList.types';

export const podcastRepository = {
  getAll: async (): Promise<Podcast[]> => {
    const fetchURL = new URL(BASE_URL);
    try {
      const response = await fetch(
        `${API_ENDPOINTS.CORS_PROXY}${fetchURL}${API_ENDPOINTS.PODCAST_LIST}`,
        { method: 'GET' },
      );
      const jsonResponse = await response.json();
      const podcasts = await jsonResponse.contents;
      const data: Podcasts = JSON.parse(String(podcasts));
      return data.feed.entry;
    } catch (error) {
      throw Error('Network issue');
    }
  },

  getById: async (id: string): Promise<Episode[]> => {
    const fetchURL = new URL(BASE_URL);
    try {
      const response = await fetch(
        `${API_ENDPOINTS.CORS_PROXY}${encodeURIComponent(
          `${fetchURL}${API_ENDPOINTS.PODCAST_DETAIL}${id}`,
        )}`,
        { method: 'GET' },
      );
      const jsonResponse = await response.json();
      const podcast = await jsonResponse.contents;
      const data: PodcastResponse = JSON.parse(String(podcast));
      return data.results;
    } catch (error) {
      throw Error('Network issue');
    }
  },
};
