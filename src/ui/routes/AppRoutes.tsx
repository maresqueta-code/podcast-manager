import { Route, Routes } from 'react-router-dom';
import { DetailLayout } from '../pages/DetailLayout';
import { EpisodeCount } from '../components/EpisodeCount';
import { EpisodeTable } from '../components/EpisodeTable';
import { HomeLayout } from '../pages/HomeLayout';
import { EpisodeDetail } from '../components/EpisodeDetail';
import { ErrorPage } from '../pages/ErrorPage';
import { ERROR_MESSAGES, ROUTE_URLS } from './routeConstants';
import { MainContent } from '../components/MainContent';

export function AppRoutes() {
  return (
    <Routes>
      {/* Detail Layout with Header and Aside, and a switchable right main section  */}
      <Route
        path={ROUTE_URLS.PODCAST}
        element={<DetailLayout />}
      >
        <Route
          path={ROUTE_URLS.PODCAST_ID}
          element={
            <>
              <EpisodeCount />
              <EpisodeTable />
            </>
          }
        />
        <Route
          path={ROUTE_URLS.EPISODE_PAGE}
          element={
            <>
              <EpisodeDetail />
            </>
          }
        />
      </Route>
      {/* Home layout without Aside, only Header, and a full width main section */}
      <Route
        path={ROUTE_URLS.HOME_PAGE}
        element={<HomeLayout />}
      >
        <Route
          index
          element={<MainContent />}
        />
      </Route>
      <Route
        path={ROUTE_URLS.ERROR_PAGE}
        element={<ErrorPage />}
      />
      <Route
        path={ROUTE_URLS.NOT_FOUND_PAGE}
        element={<ErrorPage title={ERROR_MESSAGES.NOT_FOUND} />}
      />
    </Routes>
  );
}
