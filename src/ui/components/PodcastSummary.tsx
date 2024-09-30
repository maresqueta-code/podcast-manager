import { Link } from 'react-router-dom';
import { ROUTE_URLS } from '../routes/routeConstants';

export interface PodcastSummaryProps {
  logo?: string;
  name?: string;
  artist?: string;
  podcastId?: string;
}

export function PodcastSummary({ logo, name, artist, podcastId }: PodcastSummaryProps) {
  return (
    <nav>
      <Link to={`${ROUTE_URLS.PODCAST}${podcastId}`}>
        <article className="flex w-56 flex-col items-center justify-center bg-white transition-transform ease-in hover:scale-105">
          <figure>
            <img
              src={logo || ''}
              alt="Podcast logo"
              className="relative z-10 size-36 rounded-full object-cover"
            />
          </figure>
          <div className="-mt-24 w-full rounded-sm border border-gray-200 bg-white p-4 pt-20 text-center shadow-xl active:shadow-none">
            <h2 className="mt-5 text-center text-lg font-semibold uppercase text-black">
              {name || 'No name'}
            </h2>
            <p className="text-center font-normal text-black">
              {artist ? `Author: ${artist}` : 'No author'}
            </p>
          </div>
        </article>
      </Link>
    </nav>
  );
}
