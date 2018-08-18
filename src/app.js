import React from 'react';
import ReactDOM from 'react-dom';
import SeekBar from './components/SeekBar';
import VolumeSlider from './components/VolumeSlider';

const App = () => (
  <div>
    <SeekBar
      duration={270}
      isPlaybackActive={false}
      onSeek={(value) => { console.log('You seeked to', value); }}
      onPlaybackPause={() => { console.log('Playback paused'); }}
      onPlaybackResume={() => { console.log('Playback resumed'); }}
    />
    <VolumeSlider />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
