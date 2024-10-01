import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { Episode } from '../../infrastructure/api/podcastItem.types';
import { podcastRepository } from '../../infrastructure/api/podcastRepository';

//READ hook (get a podcast by its id from api)
export function useGetPodcast(id: string): UseQueryResult<Episode[], Error> {
  return useQuery<Episode[], Error>({
    queryKey: ['podcast', id],
    enabled: !!id, // just enable the query when id is truthy
    queryFn: async () => {
      //send api request here
      const response = await podcastRepository.getById(id);
      return response;
    },
  });
}
