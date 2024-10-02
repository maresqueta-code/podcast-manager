import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage';
import { ROUTE_URLS } from './routeConstants';
import { HomeLayout } from '../pages/HomeLayout';
import { MainContent } from '../components/MainContent';
import { EpisodeCount } from '../components/EpisodeCount';
import { EpisodeTable } from '../components/EpisodeTable';
import { DetailLayout } from '../pages/DetailLayout';

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
        element={<ErrorPage title="Network error." />}
      />
      <Route
        path={ROUTE_URLS.NOT_FOUND_PAGE}
        element={<ErrorPage title="Page not found." />}
      />
    </Routes>
  );
}
