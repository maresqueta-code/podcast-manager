import { useParams } from 'react-router-dom';
import { useGetPodcastList } from '../../../application/hooks/useGetPodcastList';
import { getLastImage } from '../util';

export const usePostcardCard = () => {
  const { podcastId } = useParams();
  const { data: podcastList } = useGetPodcastList();
  const selectedPodcast = podcastList?.find(
    (podcast) => podcast?.id?.attributes['im:id'] === podcastId,
  ) || {
    'im:artist': { label: 'No artist.' },
    'im:name': { label: 'No title.' },
    'im:image': [{ label: '' }],
    summary: { label: 'No description.' },
  };
  const imageUri = getLastImage(selectedPodcast['im:image'] || []);
  const name = selectedPodcast['im:name'].label;
  const artist = selectedPodcast['im:artist'].label;
  const summary = selectedPodcast.summary.label;

  return {
    podcastId,
    name,
    artist,
    summary,
    imageUri,
  };
};
