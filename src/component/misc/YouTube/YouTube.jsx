import React from 'react';

import './YouTube.scss';

export default function YouTube(props) {
  return (
    <div className="youtube-video">
      <iframe
        src={`https://www.youtube.com/embed/${props.youtubeId}`}
        frameBorder="0"
      />
    </div>
  )
}
