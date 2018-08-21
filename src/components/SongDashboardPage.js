import React from 'react';
import SongList from './SongList';

export default () => (
  <div className="song-dashboard">
    <div className="song-dashboard__nav">
      <div className="song-dashboard__nav__search">
        <input type="text" placeholder="Search for songs and artists" />
      </div>
      <div className="song-dashboard__nav__button">
        <button>Add Song</button>
      </div>
    </div>
    <SongList />
  </div>
);
