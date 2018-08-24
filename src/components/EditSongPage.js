import React from 'react';
import { connect } from 'react-redux';

import SongForm from './SongForm';
import { startEditSong, removeSong } from '../actions/songs';

class EditSongPage extends React.Component {
  handleSubmit = (song) => {
    this.props.startEditSong(this.props.song.id, song);
    this.props.history.push('/dashboard');
  }
  handleRemove = () => {
    this.props.removeSong(this.props.song.id);
    this.props.history.push('/dashboard');
  }
  render() {
    return (
      <div>
        <SongForm
          formTitle="Edit Song"
          onSubmit={this.handleSubmit}
          song={this.props.song}
        />
        <button
          className="form-button"
          onClick={this.handleRemove}
        >
          Remove Song
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  song: state.songs.find((song) => song.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  startEditSong: (id, updates) => dispatch(startEditSong(id, updates)),
  removeSong: (id) => dispatch(removeSong(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSongPage);
