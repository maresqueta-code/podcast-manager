import { Link } from 'react-router-dom';
import { ROUTE_URLS } from '../routes/routeConstants';
import { usePostcardCard } from './hooks/usePostcardCard';

export function PodcastCard() {
  const { podcastId, name, artist, summary, imageUri } = usePostcardCard();
  return (
    <aside className="rounded-sm border bg-white p-6 text-left text-sm shadow-xl transition-transform ease-in hover:scale-105 active:shadow-none">
      <Link to={`${ROUTE_URLS.PODCAST}${podcastId}`}>
        <img
          src={imageUri}
          alt="Podcast logo"
          className="mx-auto size-44 rounded-md object-cover"
        />
        <div className="mt-6 border-y py-4 pl-2">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="italic">by: {artist}</p>
        </div>
        <div className="grid gap-1 pt-4">
          <h3 className="font-semibold">Description:</h3>
          <p className="break-all italic">{summary}</p>
        </div>
      </Link>
    </aside>
  );
}
