import { Outlet, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { PodcastCard } from '../components/PodcastCard';
import { ResetScroll } from '../components/ResetScroll';
import { ErrorPage } from './ErrorPage';
import { useGetPodcastList } from '../../application/hooks/useGetPodcastList';
import { useGetPodcast } from '../../application/hooks/useGetPodcast';
import { Loading } from '../components/Loading';

export function DetailLayout() {
  const { podcastId } = useParams();
  const { isError } = useGetPodcastList();
  const { isError: isEpisodeError } = useGetPodcast(podcastId || '');
  if (isError || isEpisodeError) return <ErrorPage title="Service unavailable. Try later." />;

  return (
    <>
      <Header>
        <Loading />
      </Header>
      <div className="mt-28 flex w-fit gap-4 px-10 md:gap-10 lg:gap-20">
        <aside className="w-1/4">
          <PodcastCard />
        </aside>
        <main className="w-3/4">
          <ResetScroll />
          <Outlet />
        </main>
      </div>
    </>
  );
}
