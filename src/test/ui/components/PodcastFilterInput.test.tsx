import { render, screen } from '@testing-library/react';
import PodcastFilterInput from '../../../ui/components/PodcastFilterInput';

describe('PodcastFilterInput tests', () => {
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
});
