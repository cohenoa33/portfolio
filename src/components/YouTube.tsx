export function YouTube({ videoId }: Props): JSX.Element {
  return (
    <div className="video">
      <iframe
        title={videoId}
        src={`https://www.youtube.com/embed/${videoId}`}
      />
    </div>
  );
}
interface Props {
  readonly videoId: string;
}
