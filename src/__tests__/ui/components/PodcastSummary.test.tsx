import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/test-utils';
import { PodcastSummary } from '../../../ui/components/PodcastSummary';

const PODCAST_SUMMARY_MOCK = {
  podcastId: '1234',
  logo: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
  name: 'Homer podcast',
  artist: 'Somebody',
};

describe('PodcastSummary tests', () => {
  it('should render the image', () => {
    renderWithRouter(
      <PodcastSummary
        podcastId={PODCAST_SUMMARY_MOCK.podcastId}
        logo={PODCAST_SUMMARY_MOCK.logo}
        name={PODCAST_SUMMARY_MOCK.name}
        artist={PODCAST_SUMMARY_MOCK.artist}
      />,
    );

    const img = screen.getByRole('img', { name: /homer podcast logo/i });
    expect(img).toBeInTheDocument();
  });

  it('should render the name', () => {
    renderWithRouter(
      <PodcastSummary
        podcastId={PODCAST_SUMMARY_MOCK.podcastId}
        name={PODCAST_SUMMARY_MOCK.name}
      />,
    );

    const name = screen.getByRole('heading', { name: /homer podcast/i });
    expect(name).toBeInTheDocument();
  });

  it('should render the author', () => {
    renderWithRouter(
      <PodcastSummary
        podcastId={PODCAST_SUMMARY_MOCK.podcastId}
        artist={PODCAST_SUMMARY_MOCK.artist}
      />,
    );

    const author = screen.getByText(/author: somebody/i);
    expect(author).toBeInTheDocument();
  });

  it('should render the navigation element to the podcast', () => {
    renderWithRouter(
      <PodcastSummary
        podcastId={PODCAST_SUMMARY_MOCK.podcastId}
        logo={PODCAST_SUMMARY_MOCK.logo}
        name={PODCAST_SUMMARY_MOCK.name}
        artist={PODCAST_SUMMARY_MOCK.artist}
      />,
    );
    const navigation = screen.getByRole('link');
    expect(navigation).toHaveAttribute('href', '/podcast/1234');
  });
});
