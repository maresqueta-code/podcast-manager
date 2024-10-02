import { useDebouncedCallback } from 'use-debounce';
import type { Filters } from '../stores/filterStore';
import useFilterStore from '../stores/filterStore';

export const usePodcastFilterInput = () => {
  const setSearchTerm = useFilterStore((state: Filters) => state.setSearchTerm);
  const debounced = useDebouncedCallback((value) => {
    setSearchTerm(value);
  }, 400);

  return {
    debounced,
  };
};
