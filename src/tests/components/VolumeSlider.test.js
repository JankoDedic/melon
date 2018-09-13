import React from 'react';
import { shallow } from 'enzyme';
import Slider from '@material-ui/lab/Slider';

import { VolumeSlider } from '../../components/VolumeSlider';

let onVolumeChange, onHandleDragStart, onHandleDragEnd, wrapper;

beforeEach(() => {
  onVolumeChange = jest.fn();
  onHandleDragStart = jest.fn();
  onHandleDragEnd = jest.fn();
  wrapper = shallow(
    <VolumeSlider
      classes={{}}
      volume={0}
      onVolumeChange={onVolumeChange}
      onHandleDragStart={onHandleDragStart}
      onHandleDragEnd={onHandleDragEnd}
    />
  );
});

test('VolumeSlider snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});

it('calls onVolumeChange when it should', () => {
  const newValue = 34;
  wrapper.find(Slider).prop('onChange')(undefined, newValue);
  expect(onVolumeChange).toHaveBeenLastCalledWith(newValue);
});

it('calls onHandleDragStart when it should', () => {
  wrapper.find(Slider).prop('onDragStart')();
  expect(onHandleDragStart).toHaveBeenCalled();
});

it('calls onHandleDragEnd when it should', () => {
  wrapper.find(Slider).prop('onDragEnd')();
  expect(onHandleDragEnd).toHaveBeenCalled();
});
