import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

export class SongForm extends React.Component {
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
  handleRemove = (e) => {
    e.preventDefault();
    this.props.onRemove();
  }
  render() {
    const { removeButton } = this.props;
    return (
      <div>
        <div className="song-form__header">
          {this.props.formTitle}
        </div>
        {this.state.error && <p className="song-form__error">{this.state.error}</p>}
        <form className="song-form__form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            spellCheck="false"
            placeholder="Title"
            autoFocus
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <input
            type="text"
            spellCheck="false"
            placeholder="Artists"
            value={this.state.artists}
            onChange={this.handleArtistsChange}
          />
          <input
            type="text"
            spellCheck="false"
            placeholder="URL (YouTube, SoundCloud...)"
            value={this.state.url}
            onChange={this.handleURLChange}
          />
          <div className="song-form__form__buttons">
            <button className="primary-button">Save Song</button>
            {removeButton && <button onClick={this.handleRemove}>Remove Song</button>}
          </div>
        </form>
      </div>
    );
  }
}

SongForm.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  song: PropTypes.shape({
    title: PropTypes.string,
    artists: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default SongForm;
