import { useParams } from 'react-router-dom';
import { useGetPodcast } from '../../../application/hooks/useGetPodcast';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

export const useEpisodeDetail = (): {
  isLoading: boolean;
  title: string;
  episodeUrl: string | undefined;
  parsedHtml: string | React.JSX.Element | React.JSX.Element[];
} => {
  const { podcastId, episodeId } = useParams();
  const { data: episodeList, isLoading } = useGetPodcast(podcastId || '');
  const selectedEpisode = episodeList?.find((episode) => episode?.trackId === Number(episodeId));
  // Sanitizing incoming html to remove any malicious script and then parsing it to secure jsx.
  const title = selectedEpisode?.trackName || 'Unknown episode.';
  const parsedHtml = parse(
    DOMPurify.sanitize(selectedEpisode?.description || 'No description available.'),
  );
  const episodeUrl = selectedEpisode?.episodeUrl;

  return {
    isLoading,
    title,
    episodeUrl,
    parsedHtml,
  };
};
