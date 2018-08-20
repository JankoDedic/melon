import React from 'react';
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
  };

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
            url="https://youtu.be/0q3ve6ZnxXE"
            playing={this.state.isPlaybackActive}
            volume={this.state.volume}
            onDuration={this.onDuration}
            onProgress={this.onProgress}
          />

          <div className="player__play-pause">
            <button onClick={this.togglePlayback}>PP</button>
          </div>

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
            <div className="player__volume-control__slider">
              <VolumeSlider
                volume={this.state.volume}
                onVolumeChange={this.onVolumeChange}
              />
            </div>
            <button>VOL</button>
          </div>

          <div className="player__song-info">
            <div>Ecstasy (Morten Granau Remix)</div>
            <div>ATB</div>
          </div>

        </div>
      </div>
    );
  }
}

export default Player;
