import React from 'react';
import SeekBar from './SeekBar';
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
        <button onClick={this.togglePlayback}>play/pause</button>
        <SeekBar
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
