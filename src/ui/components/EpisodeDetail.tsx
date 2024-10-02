import { useEpisodeDetail } from './hooks/useEpisodeDetail';

export function EpisodeDetail() {
  const { isLoading, title, episodeUrl, parsedHtml } = useEpisodeDetail();

  return (
    <article className="rounded-sm border bg-white px-4 pb-8 pt-6 text-sm shadow-xl">
      <h2 className="text-lg font-bold">{isLoading ? 'Loading...' : title}</h2>
      {!isLoading && <p className="mt-4 text-sm italic">{parsedHtml}</p>}
      <div className="mt-5 border-t pt-5">
        <audio
          controls
          src={episodeUrl}
          className="w-full"
        />
      </div>
    </article>
  );
}
