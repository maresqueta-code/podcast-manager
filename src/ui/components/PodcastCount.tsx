export interface PodcastCountProps {
  count: number;
}

export function PodcastCount({ count }: PodcastCountProps) {
  return <span className="rounded-md bg-blue-500 px-1 py-0 font-bold text-white">{count}</span>;
}
