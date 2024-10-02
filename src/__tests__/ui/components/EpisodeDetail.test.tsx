import { screen } from '@testing-library/react';
import { renderWithRoutedClient } from '../../utils/test-utils';
import { vi } from 'vitest';
import { EpisodeDetail } from '../../../ui/components/EpisodeDetail';
import { useEpisodeDetail } from '../../../application/hooks/useEpisodeDetail';

vi.mock('../../../application/hooks/useEpisodeDetail', () => ({
  useEpisodeDetail: vi.fn(),
}));

const mockUseEpisodeDetail = useEpisodeDetail as jest.Mock;

const EPISODE_MOCK = {
  isLoading: false,
  title: 'First episode',
  episodeUrl:
    'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/4D55/api.spreaker.com/download/episode/62157295/hiam_joan_baez_final.mp3',
  parsedHtml: 'Some description',
};

describe('EpisodeDetail tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the episode information', () => {
    mockUseEpisodeDetail.mockReturnValue(EPISODE_MOCK);
    renderWithRoutedClient(<EpisodeDetail />);
    screen.logTestingPlaygroundURL();
    const episodeArticle = screen.getByRole('article');
    expect(episodeArticle).toBeInTheDocument();
    const heading = screen.getByRole('heading', {
      name: /first episode/i,
    });
    expect(heading).toBeInTheDocument();
    const description = screen.getByText(/some description/i);
    expect(description).toBeInTheDocument();

    const audio = screen.getByTestId('audio-element');
    expect(audio).toBeInTheDocument();
    expect(audio).toHaveAttribute('src', EPISODE_MOCK.episodeUrl);
    expect(audio).toHaveAttribute('controls');
  });
});
