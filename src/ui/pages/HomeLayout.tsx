import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';
import { useGetPodcastList } from '../../application/hooks/useGetPodcastList';
import { Loading } from '../components/Loading';

export function HomeLayout() {
  const { isError } = useGetPodcastList();
  if (isError) return <ErrorPage title="Service unavailable. Try later." />;

  return (
    <>
      <Header>
        <Loading />
      </Header>
      <main className="my-24 w-full">
        <Outlet />
      </main>
    </>
  );
}
