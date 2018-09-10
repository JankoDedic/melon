import songsReducer from '../../reducers/songs';
import songs from '../fixtures/songs';

describe('given an empty state and a set songs action', () => {
  const state = [];
  const action = {
    type: 'SET_SONGS',
    songs
  };

  it('sets the songs', () => {
    const nextState = songsReducer(state, action);

    expect(nextState).toEqual(songs);
  });
});

describe('given some state and a clear songs action', () => {
  const state = songs;
  const action = {
    type: 'CLEAR_SONGS'
  };

  it('clears the songs', () => {
    const nextState = songsReducer(state, action);

    expect(nextState).toEqual([]);
  });
});

describe('given some state and an add song action', () => {
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

  it('adds a new song', () => {
    const nextState = songsReducer(state, action);

    expect(nextState).toEqual([...songs, song]);
  });
});

describe('given some state and an edit song action', () => {
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

  it('edits the song', () => {
    const nextState = songsReducer(state, action);

    expect(nextState[1]).toEqual({
      ...songs[1],
      ...updates
    });
  });
});

describe('given some state and a remove song action', () => {
  const state = songs;
  const id = songs[2].id;
  const action = {
    type: 'REMOVE_SONG',
    id
  };

  it('removes the song', () => {
    const nextState = songsReducer(state, action);

    expect(nextState).toEqual([songs[0], songs[1]]);
  });
});
