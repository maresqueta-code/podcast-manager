import { TextLink } from './TextLink';
import type { ReactNode } from 'react';

export interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white">
      <div className="mx-5 flex flex-wrap items-center justify-between border-b border-gray-300 bg-white py-4">
        <TextLink text="Podcaster" />
        {children}
      </div>
    </header>
  );
}
