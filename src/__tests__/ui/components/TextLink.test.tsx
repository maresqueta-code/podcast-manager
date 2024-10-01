import { screen } from '@testing-library/react';
import { TextLink } from '../../../ui/components/TextLink';
import { renderWithRouter } from '../../utils/test-utils';

describe('TextLink tests', () => {
  it('should render the link', () => {
    renderWithRouter(
      <TextLink
        text="This is a link"
        href="/domain.org/entities"
      />,
    );
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/domain.org/entities');
    expect(screen.getByText('This is a link'));
  });
});
