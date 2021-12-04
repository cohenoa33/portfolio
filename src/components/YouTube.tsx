export function YouTube({ videoId }: Props) {
  return (
    <div className="video">
      <iframe
        title={videoId}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
      />
    </div>
  );
}
interface Props {
  videoId: string;
}
