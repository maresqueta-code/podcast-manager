import { useParams } from 'react-router-dom';
import { useGetPodcast } from './useGetPodcast';

export const useEpisodeCount = () => {
  const { podcastId } = useParams();
  const { data: episodeList, isLoading } = useGetPodcast(podcastId || '');
  const episodeCount = episodeList?.length || 0;
  return {
    episodeCount,
    isLoading,
  };
};
