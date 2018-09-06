import songsSelector from '../../selectors/songs';
import songs from '../fixtures/songs';

test('songs get filtered/selected by text', () => {
  const filters = {
    text: 'muse'
  };
  const selectedSongs = songsSelector(songs, filters);
  expect(selectedSongs).toEqual([songs[0], songs[1]]);
});
