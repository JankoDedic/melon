import React from 'react';

export default ({ songTitle, artists }) => (
  <div className="song-list-item">
    <div className="song-list-item__title">{songTitle}</div>
    <div className="song-list-item__artists">{artists}</div>
    <div className="song-list-item__edit-button">
      <button>Edit</button>
    </div>
  </div>
);
