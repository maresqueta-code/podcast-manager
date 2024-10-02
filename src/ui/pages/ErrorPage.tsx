import { Header } from '../components/Header';
import { ERROR_MESSAGES } from '../routes/routeConstants';

export interface ErrorPageProps {
  title?: string;
}
export function ErrorPage({ title = ERROR_MESSAGES.NETWORK_ISSUES }: ErrorPageProps) {
  return <Header>{title}</Header>;
}
