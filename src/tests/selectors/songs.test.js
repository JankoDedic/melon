import songsSelector from '../../selectors/songs';
import songs from '../fixtures/songs';

describe('given a text filter', () => {
  const filters = {
    text: 'muse'
  };

  it('selects songs containing that text', () => {
    const selectedSongs = songsSelector(songs, filters);

    expect(selectedSongs).toEqual([songs[0], songs[1]]);
  });
});
