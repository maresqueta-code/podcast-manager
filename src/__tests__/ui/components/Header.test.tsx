import { screen } from '@testing-library/react';
import { Header } from '../../../ui/components/Header';
import { renderWithRouter } from '../../utils/test-utils';

describe('Header tests', () => {
  it('should render the link', () => {
    renderWithRouter(<Header />);
    const link = screen.getByRole('link', { name: /homepage link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
    expect(screen.getByText('Podcaster'));
  });
});
