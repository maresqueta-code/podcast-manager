import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { Podcast } from '../../infrastructure/api/podcastList.types';
import { podcastRepository } from '../../infrastructure/api/podcastRepository';

//READ hook (get podcasts from api)
export function useGetPodcastList(): UseQueryResult<Podcast[], Error> {
  return useQuery<Podcast[], Error>({
    queryKey: ['podcasts'],
    queryFn: async () => {
      //send api request here
      const response = await podcastRepository.getAll();
      return response;
    },
  });
}
