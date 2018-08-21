import React from 'react';

export default ({ song }) => (
  <div className="song-list-item">
    <div className="song-list-item__title">{song.title}</div>
    <div className="song-list-item__artists">{song.artists}</div>
    <div className="song-list-item__edit-button">
      <button>Edit</button>
    </div>
  </div>
);
