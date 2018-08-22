import React from 'react';
import { connect } from 'react-redux';

import { setNowPlayingSong } from '../actions/nowPlayingSong';

export const SongListItem = ({ song, setNowPlayingSong }) => (
  <div className="song-list-item">
    <div className="song-list-item__info" onClick={setNowPlayingSong}>
      <div className="song-list-item__info__title">{song.title}</div>
      <div className="song-list-item__info__artists">{song.artists}</div>
    </div>
    <div className="song-list-item__edit-button">
      <button>Edit</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  setNowPlayingSong: (song) => dispatch(setNowPlayingSong(ownProps.song)),
});

export default connect(undefined, mapDispatchToProps)(SongListItem);
