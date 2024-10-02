import { screen, within } from '@testing-library/react';
import { EpisodeTable } from '../../../ui/components/EpisodeTable';
import { renderWithRoutedClient } from '../../utils/test-utils';
import { vi } from 'vitest';
import { useGetPodcast } from '../../../application/hooks/useGetPodcast';
import { MOCKED_EPISODES } from '../../../__mocks__/episodes';

vi.mock('../../../application/hooks/useGetPodcast', () => ({
  useGetPodcast: vi.fn(),
}));

const mockUseGetPodcast = useGetPodcast as jest.Mock;

const expectedTitles = ['Title', 'Date', 'Duration'];

const expectedTextLinks = [
  {
    title: 'Hope Is A Muscle with Mary Chapin Carpenter',
    href: '/podcast/undefined/episode/1523872673',
  },

  {
    title:
      'Exploring Hope with Joan Baez: A Journey Through Art, Activism, and Personal Resilience',
    href: '/podcast/undefined/episode/1000671249150',
  },
  {
    title: "One Story Part Three: We're Doing What We Love",
    href: '/podcast/undefined/episode/1000487149857',
  },
];

describe('EpisodeTable tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the table', () => {
    mockUseGetPodcast.mockReturnValue({
      data: MOCKED_EPISODES,
      isLoading: false,
    });
    renderWithRoutedClient(<EpisodeTable />);

    const episodeTable = screen.getByRole('table');
    expect(episodeTable).toBeInTheDocument();

    const tableHeader = within(episodeTable).getAllByRole('columnheader');
    expect(tableHeader.length).toBe(3);

    // Check the header titles match the expected ones
    expectedTitles.every((title, index) => title === tableHeader[index]?.textContent);

    const tableCells = within(episodeTable).getAllByRole('cell');
    expect(tableCells.length).toBe(9);
  });

  it('should render the episode links', () => {
    mockUseGetPodcast.mockReturnValue({
      data: MOCKED_EPISODES,
      isLoading: false,
    });
    renderWithRoutedClient(<EpisodeTable />);

    const episodeTable = screen.getByRole('table');
    expect(episodeTable).toBeInTheDocument();

    const episodeLinks = within(episodeTable).getAllByRole('link');
    expect(episodeLinks.length).toBe(MOCKED_EPISODES.length);

    // Check the text and links fro every episode match the expected ones
    expectedTextLinks.every(
      ({ title, href }, index) =>
        title === episodeLinks[index]?.textContent &&
        href === episodeLinks[index]?.getAttribute('href'),
    );
  });

  it('should render all the episodes', () => {
    mockUseGetPodcast.mockReturnValue({
      data: MOCKED_EPISODES,
      isLoading: false,
    });
    renderWithRoutedClient(<EpisodeTable />);

    const episodeTable = screen.getByRole('table');
    expect(episodeTable).toBeInTheDocument();

    const listItems = within(episodeTable).getAllByRole('link');
    expect(listItems.length).toBe(MOCKED_EPISODES.length);
  });
});
