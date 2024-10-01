import { render, screen } from '@testing-library/react';
import { TextLink } from '../../../ui/components/TextLink';
import { MemoryRouter } from 'react-router-dom';

describe('TextLink tests', () => {
  it('should render the link', () => {
    render(
      <MemoryRouter>
        <TextLink text="This is a link" />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
    expect(screen.getByText('This is a link'));
  });
});
