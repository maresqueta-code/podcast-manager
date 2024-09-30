import { Link } from 'react-router-dom';

export function ErrorPage({ title }: { title: string }) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white">
      <div className="mx-5 flex flex-wrap items-center justify-between border-b border-gray-300 bg-white py-4">
        <nav className="self-center whitespace-nowrap text-lg font-bold text-blue-500 transition-transform ease-in hover:scale-105">
          <Link
            to="/"
            aria-label="Homepage link"
          >
            Podcaster
          </Link>
        </nav>
        {title}
      </div>
    </header>
  );
}
