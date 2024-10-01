import { Route, Routes } from 'react-router-dom';
import { PodcastList } from '../components/PodcastList';
import { ErrorPage } from '../pages/ErrorPage';
import { ROUTE_URLS } from './routeConstants';
import { HomeLayout } from '../pages/HomeLayout';

export function AppRoutes() {
  return (
    <Routes>
      {/* Home layout without Aside, only Header, and a full width main section */}
      <Route
        path={ROUTE_URLS.HOME_PAGE}
        element={<HomeLayout />}
      >
        <Route
          index
          element={<PodcastList />}
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
