import { render, screen } from '@testing-library/react';
import { PodcastCount } from '../../../ui/components/PodcastCount';

describe('PodcastCount tests', () => {
  it('should render the count', () => {
    render(<PodcastCount count={120} />);
    expect(screen.getByText('120')).toBeInTheDocument();
  });
});
