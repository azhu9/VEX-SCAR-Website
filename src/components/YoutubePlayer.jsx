// src/components/YouTubePlayer.js
import React from 'react';

const YouTubePlayer = ({ videoId }) => (
  <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
);

export default YouTubePlayer;