import React from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

import Seekbar from './Seekbar';
import VolumeSlider from './VolumeSlider';

const reactPlayerStyle = {
  display: 'none'
};

class Player extends React.Component {
  state = {
    isPlaybackActive: false,
    duration: 0,
    progress: 0,
    volume: 0.5,
    muted: false,
    isVolumeSliderBeingDragged: false,
    lastURL: null,
  };

  // If URL changed, reset progress to 0.
  static getDerivedStateFromProps(props, state) {
    if (props.nowPlayingSong.url !== state.lastURL) {
      return {
        isPlaybackActive: true,
        progress: 0,
        lastURL: props.nowPlayingSong.url,
      };
    } else {
      return null;
    }
  }

  togglePlayback = () => {
    this.setState((prevState) => ({
      isPlaybackActive: !prevState.isPlaybackActive
    }));
  };

  onDuration = (duration) => {
    this.setState({ duration });
  }
  
  onProgress = ({ playedSeconds }) => {
    this.setState({ progress: playedSeconds });
  }

  onSeek = (seconds) => {
    this.reactPlayer.seekTo(seconds);
    this.setState({ progress: seconds });
  }

  onVolumeChange = (volume) => {
    this.setState({ volume });
  }

  onVolumeHandleDragStart = () => {
    console.log('vol drag start');
    this.setState({ isVolumeSliderBeingDragged: true });
  }

  onVolumeHandleDragEnd = () => {
    console.log('vol drag end');
    this.setState({ isVolumeSliderBeingDragged: false });
  }

  toggleMute = () => {
    this.setState((prevState) => ({
      muted: !prevState.muted
    }));
  }

  onStart = () => {
    if (!this.state.isPlaybackActive) {
      this.setState({ isPlaybackActive: true });
      this.setState({ isPlaybackActive: false });
    }
  }

  ref = reactPlayer => {
    this.reactPlayer = reactPlayer;
  }

  render() {
    return (
      <div className="player-container">
        <div className="player">

          <ReactPlayer
            ref={this.ref}
            style={reactPlayerStyle}
            url={this.props.nowPlayingSong.url}
            playing={this.state.isPlaybackActive}
            volume={this.state.volume}
            muted={this.state.muted}
            onDuration={this.onDuration}
            onProgress={this.onProgress}
            onStart={this.onStart}
          />

          {
            this.state.isPlaybackActive ? (
              <div
                onClick={this.togglePlayback}
                className="player__play-pause"
              >
              </div>
            ) : (
              <div
                onClick={this.togglePlayback}
                className="player__play-pause--paused"
              >
              </div>
            )
          }

          <div className="player__seekbar">
            <Seekbar
              duration={this.state.duration}
              progress={this.state.progress}
              onSeek={this.onSeek}
              onHandleDragStart={() => { console.log('Playback paused'); }}
              onHandleDragEnd={() => { console.log('Playback resumed'); }}
            />
          </div>

          <div className="player__volume-control">
            <div
              className={
                this.state.isVolumeSliderBeingDragged
                ? "player__volume-control__slider--visible"
                : "player__volume-control__slider"
              }
            >
              <VolumeSlider
                volume={this.state.muted ? 0 : this.state.volume}
                onVolumeChange={this.onVolumeChange}
                onHandleDragStart={this.onVolumeHandleDragStart}
                onHandleDragEnd={this.onVolumeHandleDragEnd}
              />
            </div>
            {
              this.state.muted ? (
                <div
                  className="player__volume-control__button--muted"
                  onClick={this.toggleMute}
                >
                </div>
              ) : (
                <div
                  className="player__volume-control__button"
                  onClick={this.toggleMute}
                >
                </div>
              )
            }
          </div>

          <div className="player__song-info">
            <div>{this.props.nowPlayingSong.title}</div>
            <div>{this.props.nowPlayingSong.artists}</div>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nowPlayingSong: state.nowPlayingSong,
});

export default connect(mapStateToProps)(Player);
