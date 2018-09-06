import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import database from '../../firebase/firebase';
import songs from '../fixtures/songs';
import {
  setSongs, startSetSongs,
  clearSongs,
  addSong, startAddSong,
  editSong, startEditSong,
  removeSong, startRemoveSong
} from '../../actions/songs';

const createMockStore = configureStore([thunk]);
const uid = 'testuid';
const defaultAuthState = {
  auth: {
    uid
  }
};

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

test('action for adding a song gets generated and dispatched async', (done) => {
  const store = createMockStore(defaultAuthState);
  const newSong = {
    title: 'example title',
    artists: 'some artists',
    url: 'some random url'
  };
  const action = startAddSong(newSong);
  store.dispatch(action).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_SONG',
      song: {
        id: expect.any(String),
        ...newSong
      }
    });
    return database.ref(`users/${uid}/songs/${actions[0].song.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(newSong);
    done();
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

test('action for editing a song gets generated and dispatched async', (done) => {
  const store = createMockStore(defaultAuthState);
  const updates = {
    title: 'updated title',
    artists: 'updated artists',
    url: 'updated url'
  };
  const action = startEditSong(songs[1].id, updates);
  store.dispatch(action).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_SONG',
      id: songs[1].id,
      updates
    });
    return database.ref(`users/${uid}/songs/${actions[0].id}`).once('value');
  }).then((snapshot) => {
    const { id, ...rest } = songs[1];
    expect(snapshot.val()).toEqual({
      ...rest,
      ...updates
    });
    done();
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

test('action for removing a song gets generated and dispatched async', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = songs[2].id;
  const action = startRemoveSong(id);
  store.dispatch(action).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_SONG',
      id
    });
    return database.ref(`users/${uid}/songs/${songs[2].id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});
