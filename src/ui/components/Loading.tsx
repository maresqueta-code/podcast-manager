import { useParams } from 'react-router-dom';
import { useGetPodcast } from '../../application/hooks/useGetPodcast';
import { useGetPodcastList } from '../../application/hooks/useGetPodcastList';

export function Loading() {
  const { podcastId } = useParams();
  const { isLoading: loadingPodcasts } = useGetPodcastList();
  const { isLoading: loadingEpisodes } = useGetPodcast(podcastId || '');
  const isLoading = loadingPodcasts || loadingEpisodes;
  return (
    <>
      {isLoading && (
        <span
          className="relative flex size-5"
          role="progressbar"
        >
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-5 rounded-full bg-blue-500"></span>
        </span>
      )}
    </>
  );
}
