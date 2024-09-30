export function Loading() {
  return (
    <span className="relative flex size-5">
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex size-5 rounded-full bg-blue-500"></span>
    </span>
  );
}
