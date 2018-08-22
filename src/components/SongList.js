import React from 'react';
import { connect } from 'react-redux';

import SongListItem from './SongListItem';

export const SongList = ({ songs }) => (
  <div className="song-list">
    {songs.map((song, index) => <SongListItem key={index} song={song} />)}
  </div>
);

const mapStateToProps = (state) => ({
  songs: state.songs,
});

export default connect(mapStateToProps)(SongList);
