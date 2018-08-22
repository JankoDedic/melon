import React from 'react';
import { connect } from 'react-redux';

import { setNowPlayingSong } from '../actions/nowPlayingSong';

export const SongListItem = ({ song, setNowPlayingSong }) => (
  <a className="song-list-item" onClick={setNowPlayingSong}>
    <div className="song-list-item__title">{song.title}</div>
    <div className="song-list-item__artists">{song.artists}</div>
    <div className="song-list-item__edit-button">
      <button>Edit</button>
    </div>
  </a>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  setNowPlayingSong: (song) => dispatch(setNowPlayingSong(ownProps.song)),
});

export default connect(undefined, mapDispatchToProps)(SongListItem);
