import React from 'react';
import { shallow } from 'enzyme';

import { SongForm } from '../../components/SongForm';
import songs from '../fixtures/songs';

test('SongForm snapshot with default song info', () => {
  const wrapper = shallow(<SongForm />);
  expect(wrapper).toMatchSnapshot();
});

test('SongForm snapshot', () => {
  const wrapper = shallow(<SongForm song={songs[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('SongForm default state', () => {
  const wrapper = shallow(<SongForm />);
  expect(wrapper.state()).toEqual({
    title: '',
    artists: '',
    url: '',
    error: ''
  });
});

describe('SongForm inputs', () => {
  let e, wrapper;

  beforeAll(() => {
    e = { target: { value: 'sample text here' }};
    wrapper = shallow(<SongForm />);
  });

  test('song title input handles text change', () => {
    wrapper.find('input').at(0).simulate('change', e);
    expect(wrapper.state('title')).toBe(e.target.value);
  });

  test('song artists input handles text change', () => {
    wrapper.find('input').at(1).simulate('change', e);
    expect(wrapper.state('artists')).toBe(e.target.value);
  });

  test('song url input handles text change', () => {
    wrapper.find('input').at(2).simulate('change', e);
    expect(wrapper.state('url')).toBe(e.target.value);
  });
});

describe('given valid song information', () => {
  const song = songs[2];
  const onSubmit = jest.fn();
  const wrapper = shallow(<SongForm onSubmit={onSubmit} song={song} />);

  describe('given a form submit event', () => {
    const ev = { preventDefault: () => {} };
    wrapper.find('form').simulate('submit', ev);

    it('calls onSubmit with song info', () => {
      const { id, ...songInfo } = song;
      expect(onSubmit).toHaveBeenLastCalledWith({ ...songInfo });
    });
  });
});

describe('given song info with invalid title', () => {
  const song = {
    ...songs[1],
    title: ''
  };
  const onSubmit = jest.fn();
  const wrapper = shallow(<SongForm onSubmit={onSubmit} song={song} />);

  describe('given a form submit event', () => {
    const ev = { preventDefault: () => {} };
    wrapper.find('form').simulate('submit', ev);

    it('does not call onSubmit', () => {
      const { id, ...songInfo } = song;
      expect(onSubmit).not.toHaveBeenCalled();
    });

    it('sets the error state', () => {
      expect(wrapper.state('error')).not.toBeFalsy();
      expect(wrapper).toMatchSnapshot();
    });
  });
});

describe('given song info with invalid URL', () => {
  const song = {
    ...songs[0],
    url: ''
  };
  const onSubmit = jest.fn();
  const wrapper = shallow(<SongForm onSubmit={onSubmit} song={song} />);

  describe('given a form submit event', () => {
    const ev = { preventDefault: () => {} };
    wrapper.find('form').simulate('submit', ev);

    it('does not call onSubmit', () => {
      const { id, ...songInfo } = song;
      expect(onSubmit).not.toHaveBeenCalled();
    });

    it('sets the error state', () => {
      expect(wrapper.state('error')).not.toBeFalsy();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
