import songsReducer from '../../reducers/songs';
import songs from '../fixtures/songs';

test('set songs action sets the songs', () => {
  const state = [];
  const action = {
    type: 'SET_SONGS',
    songs
  };
  const nextState = songsReducer(state, action);
  expect(nextState).toEqual(songs);
});

test('clear songs action clears the songs', () => {
  const state = songs;
  const action = {
    type: 'CLEAR_SONGS'
  };
  const nextState = songsReducer(state, action);
  expect(nextState).toEqual([]);
});

test('add song action adds the song to songs', () => {
  const state = songs;
  const song = {
    title: 'a new song',
    artists: 'some artist name',
    url: 'url goes here'
  };
  const action = {
    type: 'ADD_SONG',
    song
  };
  const nextState = songsReducer(state, action);
  expect(nextState).toEqual([...songs, song]);
});

test('edit song action edits the song', () => {
  const state = songs;
  const id = songs[1].id;
  const updates = {
    title: 'modified title',
    url: 'modified url'
  };
  const action = {
    type: 'EDIT_SONG',
    id,
    updates
  };
  const nextState = songsReducer(state, action);
  expect(nextState[1]).toEqual({
    ...songs[1],
    ...updates
  });
});

test('remove song action removes the song', () => {
  const state = songs;
  const id = songs[2].id;
  const action = {
    type: 'REMOVE_SONG',
    id
  };
  const nextState = songsReducer(state, action);
  expect(nextState).toEqual([songs[0], songs[1]]);
});
