import { usePodcastList } from './hooks/usePodcastList';
import { PodcastCount } from './PodcastCount';
import PodcastFilterInput from './PodcastFilterInput';
import { PodcastSummary } from './PodcastSummary';
import { getLastImage } from './util';

export function PodcastList() {
  const { filteredPodcasts, isLoading } = usePodcastList();

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
        <ul className="mx-4 mt-10 flex flex-wrap justify-center gap-x-6 gap-y-28">
          {filteredPodcasts?.map((p) => {
            const imageUri = getLastImage(p['im:image'] || []);
            return (
              <li
                className="w-fit"
                key={p.id.attributes['im:id']}
              >
                <PodcastSummary
                  logo={imageUri}
                  name={p['im:name'].label}
                  artist={p['im:artist'].label}
                  podcastId={p.id.attributes['im:id']}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
