import { Header } from '../components/Header';

export interface ErrorPageProps {
  title: string;
}
export function ErrorPage({ title }: ErrorPageProps) {
  return <Header>{title}</Header>;
}
