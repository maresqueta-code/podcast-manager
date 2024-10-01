import { useLoading } from './hooks/useLoading';

export function Loading() {
  const { isLoading } = useLoading();
  return (
    <>
      {isLoading && (
        <span
          className="relative flex size-5"
          role="progressbar"
        >
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-5 rounded-full bg-blue-500"></span>
        </span>
      )}
    </>
  );
}
