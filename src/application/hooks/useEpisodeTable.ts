import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { useParams } from 'react-router-dom';
import { useGetPodcast } from './useGetPodcast';

export const useEpisodeTable = () => {
  const { podcastId } = useParams();
  const { data: episodeList } = useGetPodcast(podcastId || '');
  dayjs.extend(duration);

  return {
    episodeList,
    podcastId,
  };
};
