import { useDebouncedCallback } from 'use-debounce';
import useFilterStore from '../../application/stores/filterStore';

export interface PodcastFilterInputProps {
  isLoading: boolean;
}

export default function PodcastFilterInput({ isLoading }: PodcastFilterInputProps) {
  const setSearchTerm = useFilterStore((state) => state.setSearchTerm);
  const debounced = useDebouncedCallback((value) => {
    setSearchTerm(value);
  }, 400);

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
