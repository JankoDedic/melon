import React from 'react';
import { connect } from 'react-redux';

import SongForm from './SongForm';
import { startEditSong, startRemoveSong } from '../actions/songs';

export class EditSongPage extends React.Component {
  handleSubmit = (song) => {
    this.props.startEditSong(this.props.song.id, song);
    this.props.history.push('/dashboard');
  }
  handleRemove = () => {
    this.props.startRemoveSong(this.props.song.id);
    this.props.history.push('/dashboard');
  }
  render() {
    return (
      <div>
        <SongForm
          formTitle="Edit Song"
          onSubmit={this.handleSubmit}
          removeButton={true}
          onRemove={this.handleRemove}
          song={this.props.song}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  song: state.songs.find((song) => song.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  startEditSong: (id, updates) => dispatch(startEditSong(id, updates)),
  startRemoveSong: (id) => dispatch(startRemoveSong(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSongPage);
