import React from "react";

export default function YouTube({ videoId }) {
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
