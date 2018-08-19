import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 300,
  },
};

class Seekbar extends React.Component {
  state = {
    value: 0,
    isHandleDragged: false,
    canSeekOnDragEnd: false,
  };

  isSlideMovingAutomatically() {
    return !this.state.isHandleDragged && this.props.isPlaybackActive;
  }

  // NOTE: Slider component sometimes calls onDragStart twice in cases when
  // the click is near the handle. This should not matter in practice, but
  // you should be aware that you should not rely on onPlaybackPause to
  // perform any toggling action.
  onDragStart = () => {
    this.setState((prevState, props) => ({
      isHandleDragged: true,
      value: props.progress
    }));

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
    const { classes, progress } = this.props;
    const { value, isHandleDragged } = this.state;

    return (
      <div className={classes.root}>
        <Slider
          max={this.props.duration}
          value={isHandleDragged ? value : progress}
          aria-labelledby="label"
          onChange={this.onHandleChange}
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
        />
      </div>
    )
  }
}

Seekbar.propTypes = {
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  isPlaybackActive: PropTypes.bool.isRequired,

  onSeek: PropTypes.func,
  onPlaybackPause: PropTypes.func,
  onPlaybackResume: PropTypes.func,
};

Seekbar.defaultProps = {
  onSeek: () => {},
  onPlaybackPause: () => {},
  onPlaybackResume: () => {},
};

export default withStyles(styles)(Seekbar);
