import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
};

class VolumeSlider extends React.Component {
  handleChange = (e, value) => {
    this.props.onVolumeChange(value);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Slider
          max={1}
          value={this.props.volume}
          onChange={this.handleChange}
          vertical
          reverse
        />
      </div>
    );
  }
}

VolumeSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  volume: PropTypes.number.isRequired,
  onVolumeChange: PropTypes.func,
};

export default withStyles(styles)(VolumeSlider);
