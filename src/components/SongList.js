import React from 'react';
import { connect } from 'react-redux';

import SongListItem from './SongListItem';
import selectSongs from '../selectors/songs';

export const SongList = ({ songs }) => (
  <div className="song-list">{
      songs.map((song) => <SongListItem key={song.id} song={song} /> )
  }</div>
);

const mapStateToProps = (state) => ({
  songs: selectSongs(state.songs, state.filters),
});

export default connect(mapStateToProps)(SongList);
