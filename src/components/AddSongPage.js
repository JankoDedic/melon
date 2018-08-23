import React from 'react';
import { connect } from 'react-redux';

import { addSong } from '../actions/songs';

export class AddSongPage extends React.Component {
  state = {
    title: '',
    artists: '',
    url: '',
  };
  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  }
  handleArtistsChange = (e) => {
    this.setState({
      artists: e.target.value,
    });
  }
  handleURLChange = (e) => {
    this.setState({
      url: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, artists, url } = this.state;
    this.props.addSong(title, artists, url);
  }
  render() {
    return (
      <div>
        <div className="add-song__header">
          Add Song
        </div>
        <form className="add-song__form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            autoFocus
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <input
            type="text"
            placeholder="Artists"
            value={this.state.artists}
            onChange={this.handleArtistsChange}
          />
          <input
            type="text"
            placeholder="URL (YouTube, SoundCloud...)"
            value={this.state.url}
            onChange={this.handleURLChange}
          />
          <button className="primary-button">Save Song</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addSong: (title, artists, url) => dispatch(addSong({ title, artists, url })),
})

export default connect(undefined, mapDispatchToProps)(AddSongPage);
