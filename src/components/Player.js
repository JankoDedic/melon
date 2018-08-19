import React from 'react';
import ReactPlayer from 'react-player';

import Seekbar from './Seekbar';
import VolumeSlider from './VolumeSlider';

class Player extends React.Component {
  state = {
    isPlaybackActive: false,
  };

  togglePlayback = () => {
    this.setState((prevState) => ({
      isPlaybackActive: !prevState.isPlaybackActive
    }));
  };

  render() {
    return (
      <div>
        <ReactPlayer url="https://youtu.be/0yBnIUX0QAE" playing />
        <button onClick={this.togglePlayback}>play/pause</button>
        <Seekbar
          duration={60}
          isPlaybackActive={this.state.isPlaybackActive}
          onSeek={(value) => { console.log('You seeked to', value); }}
          onPlaybackPause={() => { console.log('Playback paused'); }}
          onPlaybackResume={() => { console.log('Playback resumed'); }}
        />
        <VolumeSlider />
      </div>
    );
  }
}

export default Player;
