import React from 'react';
import { connect } from 'react-redux';

import SongForm from './SongForm';
import { addSong } from '../actions/songs';

class AddSongPage extends React.Component {
  handleSubmit = (song) => {
    this.props.addSong(song);
    this.props.history.push('/dashboard');
  }
  render() {
    return (
      <SongForm formTitle="Add Song" onSubmit={this.handleSubmit} />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addSong: (song) => dispatch(addSong(song)),
});

export default connect(undefined, mapDispatchToProps)(AddSongPage);
