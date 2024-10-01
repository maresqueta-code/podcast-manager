import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import PodcastFilterInput from '../../../ui/components/PodcastFilterInput';
import { vi } from 'vitest';
import { useDebouncedCallback } from 'use-debounce';

// Mock useDebounce
const mockedDebounce = vi.fn();

vi.mock('use-debounce', () => ({
  ...vi.importActual('use-debounce'),
  useDebouncedCallback: () => mockedDebounce,
}));

const renderSearch = async () => {
  renderHook(() => useDebouncedCallback(() => {}, 400));
  return render(<PodcastFilterInput isLoading={false} />);
};

describe('PodcastFilterInput tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the input enabled when not loading', () => {
    render(<PodcastFilterInput isLoading={false} />);
    const input = screen.getByPlaceholderText('Filter podcasts...');
    expect(input).toBeInTheDocument();
    expect(input).toBeEnabled();
  });

  it('should render the input disabled when loading', () => {
    render(<PodcastFilterInput isLoading={true} />);
    const input = screen.getByPlaceholderText('Filter podcasts...');
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
  });

  it('should trigger the debounce when typing ', async () => {
    const { getByRole } = await renderSearch();
    const searchBox = getByRole('searchbox');
    fireEvent.focus(searchBox);
    fireEvent.change(searchBox, { target: { value: 'podcast' } });
    expect(mockedDebounce).toHaveBeenCalled();
  });
});
