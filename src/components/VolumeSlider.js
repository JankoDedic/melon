import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    display: 'flex',
    height: 150,
    width: 10,
  },
};

class VolumeSlider extends React.Component {
  state = {
    value: 0.5,
  };

  handleChange = (e, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider max={1} value={value} onChange={this.handleChange} vertical reverse />
      </div>
    );
  }
}

VolumeSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VolumeSlider);
