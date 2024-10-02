import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { ROUTE_URLS } from '../routes/routeConstants';
import { useEpisodeTable } from '../../application/hooks/useEpisodeTable';

export function EpisodeTable() {
  const { podcastId, episodeList } = useEpisodeTable();

  return (
    <section className="border bg-white px-4 py-8 text-sm shadow-xl">
      <table className="w-full">
        <thead className="border-b border-gray-300 text-left">
          <tr>
            <th className="pb-2 pl-2">Title</th>
            <th className="pb-2 pl-2">Date</th>
            <th className="pb-2 pl-8">Duration</th>
          </tr>
        </thead>
        <tbody>
          {episodeList?.map((e) => (
            <tr
              key={e.trackId}
              className="border-b border-gray-300 odd:bg-gray-50 even:bg-white"
            >
              <td className="p-2 text-blue-500 hover:underline">
                <nav>
                  <Link
                    to={`${ROUTE_URLS.PODCAST}${podcastId}${ROUTE_URLS.EPISODE}${String(
                      e.trackId,
                    )}`}
                  >
                    {e.trackName}
                  </Link>
                </nav>
              </td>
              <td className="p-2">{dayjs(e.releaseDate).format('DD/MM/YYYY')}</td>
              <td className="p-2 pl-8">{dayjs.duration(e.trackTimeMillis).format('mm:ss')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
