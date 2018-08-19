import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 300,
  },
};

class SeekBar extends React.Component {
  state = {
    value: 0,
    isHandleDragged: false,
    canSeekOnDragEnd: false,
    interval: undefined,
  };

  componentDidMount() {
    this.state.interval = setInterval(this.tick, 1000/20);
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  tick = () => {
    if (this.isSlideMovingAutomatically()) {
      this.setState((prevState) => {
        if (prevState.value < this.props.duration) {
          return { value: prevState.value + 1/20 };
        } else {
          return prevState.value;
        }
      });
    }
  }

  isSlideMovingAutomatically() {
    return !this.state.isHandleDragged && this.props.isPlaybackActive;
  }

  // NOTE: Slider component sometimes calls onDragStart twice in cases when
  // the click is near the handle. This should not matter in practice, but
  // you should be aware that you should not rely on onPlaybackPause to
  // perform any toggling action.
  onDragStart = () => {
    this.setState({ isHandleDragged: true });

    if (this.props.isPlaybackActive) {
      this.props.onPlaybackPause();
    }
  }

  // A click will call onDragEnd -> onHandleChange
  // A drag and release will call onHandleChange -> onDragEnd
  // - onHandleChange is free to call onSeek unless the handle is still being
  // dragged (in that case, the responsibility is delegated to onDragEnd)
  // - onDragEnd is allowed to call onSeek only if onHandleChange allowed it
  // (via canSeekOnDragEnd boolean).

  onDragEnd = () => {
    if (this.props.isPlaybackActive) {
      this.props.onPlaybackResume();
    }

    let canSeekOnDragEnd = this.state.canSeekOnDragEnd;

    if (this.state.canSeekOnDragEnd) {
      this.props.onSeek(this.state.value);
      canSeekOnDragEnd = false;
    }

    this.setState({ isHandleDragged: false, canSeekOnDragEnd });
  }

  onHandleChange = (e, value) => {
    let canSeekOnDragEnd;

    if (this.state.isHandleDragged) {
      canSeekOnDragEnd = true;
    } else {
      this.props.onSeek(value);
    }

    this.setState({ value, canSeekOnDragEnd });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider
          max={this.props.duration}
          value={value}
          aria-labelledby="label"
          onChange={this.onHandleChange}
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
        />
      </div>
    )
  }
}

SeekBar.propTypes = {
  duration: PropTypes.number.isRequired,
  isPlaybackActive: PropTypes.bool.isRequired,

  onSeek: PropTypes.func,
  onPlaybackPause: PropTypes.func,
  onPlaybackResume: PropTypes.func,
};

SeekBar.defaultProps = {
  onSeek: () => {},
  onPlaybackPause: () => {},
  onPlaybackResume: () => {},
};

export default withStyles(styles)(SeekBar);
