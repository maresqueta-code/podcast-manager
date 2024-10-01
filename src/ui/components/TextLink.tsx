import { Link } from 'react-router-dom';

export interface TextLinkProps {
  text: string;
}

export function TextLink({ text }: TextLinkProps) {
  return (
    <nav className="self-center whitespace-nowrap text-lg font-bold text-blue-500 transition-transform ease-in hover:scale-105">
      <Link
        to="/"
        aria-label="Homepage link"
      >
        {text}
      </Link>
    </nav>
  );
}
