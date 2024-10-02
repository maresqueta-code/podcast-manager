import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';
import { useGetPodcastList } from '../../application/hooks/useGetPodcastList';
import { Loading } from '../components/Loading';
import { ERROR_MESSAGES } from '../routes/routeConstants';
import { ResetScroll } from '../components/ResetScroll';

export function HomeLayout() {
  const { isError } = useGetPodcastList();
  if (isError) return <ErrorPage title={ERROR_MESSAGES.SERVICE_UNAVAILABLE} />;

  return (
    <>
      <Header>
        <Loading />
      </Header>
      <main className="my-24 w-full">
        <ResetScroll />
        <Outlet />
      </main>
    </>
  );
}
