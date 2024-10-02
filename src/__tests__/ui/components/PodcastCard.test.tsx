import { screen } from '@testing-library/react';
import { renderWithRoutedClient } from '../../utils/test-utils';
import { vi } from 'vitest';
import { PodcastCard } from '../../../ui/components/PodcastCard';
import { usePodcastCard } from '../../../application/hooks/usePodcastCard';

vi.mock('../../../application/hooks/usePodcastCard', () => ({
  usePodcastCard: vi.fn(),
}));

const mockUsePodcastCard = usePodcastCard as jest.Mock;

const PODCAST_CARD_MOCK = {
  podcastId: '1234',
  imageUri:
    'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
  name: 'Homer podcast',
  artist: 'Somebody',
  summary: 'The description of this podcast.',
};

describe('PostcardCard tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render Podcast card wrapped by a link to Poscard Details page', () => {
    mockUsePodcastCard.mockReturnValue(PODCAST_CARD_MOCK);
    renderWithRoutedClient(<PodcastCard />);
    const link = screen.getByRole('link', {
      name: /podcast logo homer podcast by: somebody description: the description of this podcast\./i,
    });
    expect(link).toBeInTheDocument();
    expect(link?.getAttribute('href')).toBe('/podcast/1234');
  });
});
