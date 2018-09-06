import {
  setSongs,
  clearSongs,
  addSong,
  editSong,
  removeSong
} from '../../actions/songs';

const songs = [{
  title: 'Feeling Good',
  artists: 'Muse',
  url: 'example'
}, {
  title: 'Knights of Cydonia',
  artists: 'Muse',
  url: 'example2'
}, {
  title: 'Sultans of Swing',
  artists: 'Dire Straits',
  url: 'example3'
}];

test('action for setting songs gets generated', () => {
  const action = setSongs(songs);
  expect(action).toEqual({
    type: 'SET_SONGS',
    songs
  });
});

test('action for clearing songs gets generated', () => {
  const action = clearSongs();
  expect(action).toEqual({
    type: 'CLEAR_SONGS'
  });
});

test('action for adding a song gets generated', () => {
  const action = addSong(songs[0]);
  expect(action).toEqual({
    type: 'ADD_SONG',
    song: songs[0]
  });
});

test('action for editing a song gets generated', () => {
  const id = 'sample id';
  const updates = {
    title: 'new title',
    url: 'new url'
  };
  const action = editSong(id, updates);
  expect(action).toEqual({
    type: 'EDIT_SONG',
    id,
    updates
  });
});

test('action for removing a song gets generated', () => {
  const id = 'sample id';
  const action = removeSong(id);
  expect(action).toEqual({
    type: 'REMOVE_SONG',
    id
  });
});
