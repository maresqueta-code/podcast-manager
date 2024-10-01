import { useMemo } from 'react';
import { useGetPodcastList } from '../../../application/hooks/useGetPodcastList';
import { useGetSearchTerm } from '../../../application/stores/filterStore';
import type { Podcast } from '../../../infrastructure/api/podcastList.types';

export const useMainContent = () => {
  const searchTerm = useGetSearchTerm();
  const { data: podcastList, isLoading, isError } = useGetPodcastList();

  const filteredPodcasts = useMemo(() => {
    if (isLoading || isError || !podcastList || !Array.isArray(podcastList)) return [];
    return podcastList.filter((podcast: Podcast) => {
      const term = searchTerm.toLowerCase();
      return (
        podcast?.['im:artist']?.label.toLowerCase().includes(term) ||
        podcast?.['im:name']?.label.toLowerCase().includes(term) ||
        podcast?.summary?.label.toLowerCase().includes(term)
      );
    });
  }, [isError, isLoading, podcastList, searchTerm]);

  return { filteredPodcasts, isLoading };
};
