import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: '100%',
  },
};

class Seekbar extends React.Component {
  state = {
    value: 0,
    isHandleDragged: false,
    canSeekOnDragEnd: false,
  };

  // NOTE: Slider component sometimes calls onDragStart twice in cases when
  // the click is near the handle. This should not matter in practice, but
  // you should be aware that you should not rely on onHandleDragStart to
  // perform any toggling action.
  onDragStart = () => {
    this.setState((prevState, props) => ({
      isHandleDragged: true,
      value: props.progress
    }));

    this.props.onHandleDragStart();
  }

  // A click will call onDragEnd -> onHandleChange
  // A drag and release will call onHandleChange -> onDragEnd
  // - onHandleChange is free to call onSeek unless the handle is still being
  // dragged (in that case, the responsibility is delegated to onDragEnd)
  // - onDragEnd is allowed to call onSeek only if onHandleChange allowed it
  // (via canSeekOnDragEnd boolean).

  onDragEnd = () => {
    this.props.onHandleDragEnd();

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

  onSeek: PropTypes.func,
  onHandleDragStart: PropTypes.func,
  onHandleDragEnd: PropTypes.func,
};

Seekbar.defaultProps = {
  onSeek: () => {},
  onHandleDragStart: () => {},
  onHandleDragEnd: () => {},
};

export default withStyles(styles)(Seekbar);
