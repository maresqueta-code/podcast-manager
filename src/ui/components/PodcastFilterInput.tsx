import { usePodcastFilterInput } from '../../application/hooks/usePodcastFilterInput';

export interface PodcastFilterInputProps {
  isLoading: boolean;
}

export default function PodcastFilterInput({ isLoading }: PodcastFilterInputProps) {
  const { debounced } = usePodcastFilterInput();

  return (
    <input
      onChange={(e) => debounced(e.target.value)}
      type="search"
      id="podcast-filter"
      disabled={isLoading}
      className="block w-96 rounded-md border-2 border-gray-200 bg-white p-2.5 text-sm focus:border-blue-500"
      placeholder="Filter podcasts..."
      autoComplete="off"
    />
  );
}
