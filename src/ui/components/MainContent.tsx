import { useMainContent } from '../../application/hooks/useMainContent';
import { PodcastCount } from './PodcastCount';
import PodcastFilterInput from './PodcastFilterInput';
import { PodcastList } from './PodcastList';

export function MainContent() {
  const { filteredPodcasts, isLoading } = useMainContent();

  return (
    <>
      <section className="mx-5 flex items-center justify-center md:justify-end">
        <div className="hidden sm:block" />
        <div className="flex flex-row items-center gap-3">
          <PodcastCount count={filteredPodcasts.length} />
          <PodcastFilterInput isLoading={isLoading} />
        </div>
      </section>
      <section>
        <PodcastList podcasts={filteredPodcasts} />
      </section>
    </>
  );
}
