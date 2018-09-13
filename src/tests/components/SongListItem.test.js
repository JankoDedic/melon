import React from 'react';
import { shallow } from 'enzyme';

import { SongListItem } from '../../components/SongListItem';
import songs from '../fixtures/songs';

test('SongListItem snapshot', () => {
  const wrapper = shallow(<SongListItem song={songs[0]} />);
  expect(wrapper).toMatchSnapshot();
});

describe('info area click', () => {
  const setNowPlayingSong = jest.fn();
  const song = songs[0];
  const wrapper = shallow(
    <SongListItem
      song={song}
      setNowPlayingSong={setNowPlayingSong}
    />
  );

  wrapper.find('.song-list-item__info').simulate('click');

  it('calls setNowPlayingSong', () => {
    expect(setNowPlayingSong).toHaveBeenCalled();
  });
});
