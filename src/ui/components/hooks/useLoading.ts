import { useParams } from 'react-router-dom';
import { useGetPodcast } from '../../../application/hooks/useGetPodcast';
import { useGetPodcastList } from '../../../application/hooks/useGetPodcastList';

export const useLoading = () => {
  const { podcastId } = useParams();
  const { isLoading: loadingPodcasts } = useGetPodcastList();
  const { isLoading: loadingEpisodes } = useGetPodcast(podcastId || '');
  const isLoading = loadingPodcasts || loadingEpisodes;

  return {
    isLoading,
  };
};
