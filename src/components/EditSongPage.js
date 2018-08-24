import React from 'react';
import { connect } from 'react-redux';

import SongForm from './SongForm';
import { editSong } from '../actions/songs';

class EditSongPage extends React.Component {
  handleSubmit = (song) => {
    this.props.editSong(this.props.song.id, song);
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
        <button className="form-button">Remove Song</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  song: state.songs.find((song) => song.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  editSong: (id, updates) => dispatch(editSong(id, updates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSongPage);
