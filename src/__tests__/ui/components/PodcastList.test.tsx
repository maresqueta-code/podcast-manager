import { screen, within } from '@testing-library/react';
// import SearchPage from './SearchPage';
import { renderWithRouter } from '../../utils/test-utils';
import { PodcastList } from '../../../ui/components/PodcastList';
import { MOCKED_PODCASTS } from '../../../__mocks__/podcasts';

describe('PodcastList tests', () => {
  it('should render the podcasts', () => {
    renderWithRouter(<PodcastList podcasts={MOCKED_PODCASTS} />);
    const podcastList = screen.getByRole('list');
    const listItems = within(podcastList).getAllByRole('listitem');

    expect(listItems.length).toBe(MOCKED_PODCASTS.length);

    const img = screen.getByRole('img', { name: /podcast logo/i });
    expect(img).toBeInTheDocument();
  });
});
