import type { Podcast } from '../../infrastructure/api/podcastList.types';
import { PodcastSummary } from './PodcastSummary';
import { getLastImage } from './util';

export interface PodcastListProps {
  podcasts: Podcast[];
}
export function PodcastList({ podcasts }: PodcastListProps) {
  return (
    <ul className="mx-4 mt-10 flex flex-wrap justify-center gap-x-6 gap-y-28">
      {podcasts?.map((p) => {
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
  );
}
