import React from 'react';
import ReactPlayer from 'react-player';

export default class SongForm extends React.Component {
  constructor(props) {
    super(props);

    if (props.song) {
      this.state = { ...props.song, error: '' };
    } else {
      this.state = {
        title: '',
        artists: '',
        url: '',
        error: '',
      };
    }
  }
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
    const { id, title, artists, url } = this.state;
    const isTitleValid = title.length > 0;
    const isURLValid = ReactPlayer.canPlay(url);
    if (!isTitleValid) {
      this.setState({ error: 'Invalid title.' });
    } else if (!isURLValid) {
      this.setState({ error: 'Invalid URL. Melon cannot play this media.' });
    } else {
      this.props.onSubmit({ title, artists, url });
    }
  }
  render() {
    return (
      <div>
        <div className="add-song__header">
          {this.props.formTitle}
        </div>
        {this.state.error && <p className="add-song__error">{this.state.error}</p>}
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

