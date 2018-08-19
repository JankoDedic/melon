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

  ref = reactPlayer => {
    this.reactPlayer = reactPlayer;
  }

  render() {
    return (
      <div>
        <ReactPlayer
          ref={this.ref}
          style={reactPlayerStyle}
          url="https://youtu.be/0yBnIUX0QAE"
          playing={this.state.isPlaybackActive}
          onDuration={this.onDuration}
          onProgress={this.onProgress}
        />
        <button onClick={this.togglePlayback}>play/pause</button>
        <Seekbar
          duration={this.state.duration}
          progress={this.state.progress}
          onSeek={this.onSeek}
          onHandleDragStart={() => { console.log('Playback paused'); }}
          onHandleDragEnd={() => { console.log('Playback resumed'); }}
        />
        <VolumeSlider />
      </div>
    );
  }
}

export default Player;
