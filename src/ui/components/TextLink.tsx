import { Link } from 'react-router-dom';

export interface TextLinkProps {
  text: string;
  href?: string;
  ariaLabel?: string;
}

export function TextLink({ text, href = '/', ariaLabel = 'Homepage link' }: TextLinkProps) {
  return (
    <nav className="self-center whitespace-nowrap text-lg font-bold text-blue-500 transition-transform ease-in hover:scale-105">
      <Link
        to={href}
        aria-label={ariaLabel}
      >
        {text}
      </Link>
    </nav>
  );
}
