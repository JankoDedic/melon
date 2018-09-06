import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import database from '../../firebase/firebase';
import {
  setSongs, startSetSongs,
  clearSongs,
  addSong,
  editSong,
  removeSong
} from '../../actions/songs';

const createMockStore = configureStore([thunk]);
const uid = 'testuid';
const defaultAuthState = {
  auth: {
    uid
  }
};

const songs = [{
  id: '1',
  title: 'Feeling Good',
  artists: 'Muse',
  url: 'example'
}, {
  id: '2',
  title: 'Knights of Cydonia',
  artists: 'Muse',
  url: 'example2'
}, {
  id: '3',
  title: 'Sultans of Swing',
  artists: 'Dire Straits',
  url: 'example3'
}];

beforeEach((done) => {
  const songsData = {};
  songs.forEach(({ id, ...rest }) => {
    songsData[id] = { ...rest };
  });
  database.ref(`users/${uid}/songs`).set(songsData).then(() => done());
});

test('action for setting songs gets generated', () => {
  const action = setSongs(songs);
  expect(action).toEqual({
    type: 'SET_SONGS',
    songs
  });
});

test('action for setting songs gets generated and dispatched async', (done) => {
  const store = createMockStore(defaultAuthState);
  const action = startSetSongs();
  store.dispatch(action).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_SONGS',
      songs
    });
    done();
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
