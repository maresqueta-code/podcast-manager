import { useEpisodeCount } from './hooks/useEpisodeCount';

export function EpisodeCount() {
  const { isLoading, episodeCount } = useEpisodeCount();

  return (
    <section className="mb-4 flex w-full items-center rounded-sm border bg-white px-4 py-2 text-lg font-bold shadow-xl">
      Episodes: {isLoading ? '' : episodeCount}
    </section>
  );
}
