import { useGetPodcastList } from '../../../application/hooks/useGetPodcastList';
import { useGetSearchTerm } from '../../../application/stores/filterStore';
import type { Podcast } from '../../../infrastructure/api/podcastList.types';

export const usePodcastList = () => {
  const searchTerm = useGetSearchTerm();
  const { data: podcastList, isLoading } = useGetPodcastList();
  const filteredPodcasts =
    podcastList?.filter((podcast: Podcast) => {
      const term = searchTerm.toLowerCase();
      return (
        podcast?.['im:artist']?.label.toLowerCase().includes(term) ||
        podcast?.['im:name']?.label.toLowerCase().includes(term) ||
        podcast?.summary?.label.toLowerCase().includes(term)
      );
    }) || [];

  return { filteredPodcasts, isLoading };
};
