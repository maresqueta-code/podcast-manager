import { Link, useParams } from 'react-router-dom';
import { Loading } from './Loading';
import { useGetPodcast } from '../../application/hooks/useGetPodcast';
import { useGetPodcastList } from '../../application/hooks/useGetPodcastList';

export function Header() {
  const { podcastId } = useParams();
  const { isLoading: isLoadingPodcasts } = useGetPodcastList();
  const { isLoading: loadingEpisodes } = useGetPodcast(podcastId || '');
  const isLoading = isLoadingPodcasts || loadingEpisodes;

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white">
      <div className="mx-5 flex flex-wrap items-center justify-between border-b border-gray-300 bg-white py-4">
        <nav className="self-center whitespace-nowrap text-lg font-bold text-blue-500 transition-transform ease-in hover:scale-105">
          <Link
            to="/"
            aria-label="Homepage link"
          >
            Podcaster
          </Link>
        </nav>
        {isLoading && <Loading />}
      </div>
    </header>
  );
}
