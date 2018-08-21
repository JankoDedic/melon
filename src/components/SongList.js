import React from 'react';

import SongListItem from './SongListItem';

const defaultSongs = [
  { title: 'This Is What You Came For', artists: 'Calvin Harris, Rihanna' },
  { title: 'My Way', artists: 'Frank Sinatra' }
];

export default ({ songs = defaultSongs }) => (
  <div className="song-list">
    {songs.map((song, index) => <SongListItem key={index} song={song} />)}
  </div>
);
