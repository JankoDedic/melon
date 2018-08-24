import React from 'react';
import { connect } from 'react-redux';

import SongForm from './SongForm';
import { startAddSong } from '../actions/songs';

class AddSongPage extends React.Component {
  handleSubmit = (song) => {
    this.props.startAddSong(song);
    this.props.history.push('/dashboard');
  }
  render() {
    return (
      <SongForm formTitle="Add Song" onSubmit={this.handleSubmit} />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddSong: (song) => dispatch(startAddSong(song)),
});

export default connect(undefined, mapDispatchToProps)(AddSongPage);
