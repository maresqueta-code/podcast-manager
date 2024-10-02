import { screen } from '@testing-library/react';
import { EpisodeCount } from '../../../ui/components/EpisodeCount';
import { vi } from 'vitest';
import { useGetPodcast } from '../../../application/hooks/useGetPodcast';
import { MOCKED_EPISODES } from '../../../__mocks__/episodes';
import { renderWithRoutedClient } from '../../utils/test-utils';

vi.mock('../../../application/hooks/useGetPodcast', () => ({
  useGetPodcast: vi.fn(),
}));

const mockUseGetPodcastList = useGetPodcast as jest.Mock;

describe('EpisodeCount tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the episodes count', () => {
    mockUseGetPodcastList.mockReturnValue({
      data: MOCKED_EPISODES,
      isLoading: false,
    });
    renderWithRoutedClient(<EpisodeCount />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/episodes: 3/i);
  });

  it('should render zero episodes when list is empty', () => {
    mockUseGetPodcastList.mockReturnValue({
      data: [],
      isLoading: false,
    });
    renderWithRoutedClient(<EpisodeCount />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/episodes: 0/i);
  });

  it('should not render a count during loading state', () => {
    mockUseGetPodcastList.mockReturnValue({
      data: undefined,
      isLoading: true,
    });
    renderWithRoutedClient(<EpisodeCount />);
    screen.logTestingPlaygroundURL();
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/episodes:/i);
  });
});
