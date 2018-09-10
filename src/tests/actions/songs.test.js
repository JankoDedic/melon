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

describe('songs action generators', () => {
  describe('set songs action generator', () => {
    it('generates a valid action', () => {
      const action = setSongs(songs);

      expect(action).toEqual({
        type: 'SET_SONGS',
        songs
      });
    });
  });

  describe('clear songs action generator', () => {
    it('generates a valid action', () => {
      const action = clearSongs();

      expect(action).toEqual({
        type: 'CLEAR_SONGS'
      });
    });
  });

  describe('add song action generator', () => {
    it('generates a valid action', () => {
      const action = addSong(songs[0]);

      expect(action).toEqual({
        type: 'ADD_SONG',
        song: songs[0]
      });
    });
  });

  describe('edit song action generator', () => {
    describe('given a song id and updates', () => {
      const id = 'sample id';
      const updates = {
        title: 'new title',
        url: 'new url'
      };

      it('generates a valid action', () => {
        const action = editSong(id, updates);

        expect(action).toEqual({
          type: 'EDIT_SONG',
          id,
          updates
        });
      });
    });
  });

  describe('remove song action generator', () => {
    describe('given a song id', () => {
      const id = 'sample id';

      it('generates a valid action', () => {
        const action = removeSong(id);

        expect(action).toEqual({
          type: 'REMOVE_SONG',
          id
        });
      });
    });
  });
});

describe('songs async action generators', () => {
  let store;
  const setupStoreAndDatabase = () => {
    store = createMockStore(defaultAuthState);
    const songsData = {};
    songs.forEach(({ id, ...rest }) => {
      songsData[id] = { ...rest };
    });
    return database.ref(`users/${uid}/songs`).set(songsData);
  };

  describe('start set songs action generator', () => {
    beforeAll(setupStoreAndDatabase);

    it('dispatches a valid set songs action', () => {
      const action = startSetSongs();

      return store.dispatch(action).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'SET_SONGS',
          songs
        });
      });
    });
  });

  describe('start add song action generator', () => {
    describe('given a new song', () => {
      const newSong = {
        title: 'example title',
        artists: 'some artists',
        url: 'some random url'
      };

      beforeAll(setupStoreAndDatabase);

      let songID;
      it('dispatches a valid add song action', () => {
        const action = startAddSong(newSong);

        return store.dispatch(action).then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual({
            type: 'ADD_SONG',
            song: {
              id: expect.any(String),
              ...newSong
            }
          });
          songID = actions[0].song.id;
        });
      });

      it('adds a song to the database upon being dispatched', () => {
        return database.ref(`users/${uid}/songs/${songID}`)
          .once('value')
          .then((snapshot) => {
            expect(snapshot.val()).toEqual(newSong);
          });
      });
    });
  });

  describe('start edit song action generator', () => {
    describe('given the song id and updates', () => {
      const id = songs[1].id;
      const updates = {
        title: 'updated title',
        artists: 'updated artists',
        url: 'updated url'
      };

      beforeAll(setupStoreAndDatabase);

      it('dispatches a valid edit song action', () => {
        const action = startEditSong(id, updates);

        return store.dispatch(action).then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual({
            type: 'EDIT_SONG',
            id,
            updates
          });
        });
      });

      it('edits a song in the database upon being dispatched', () => {
        return database.ref(`users/${uid}/songs/${id}`)
          .once('value')
          .then((snapshot) => {
            const { id, ...rest } = songs[1];
            expect(snapshot.val()).toEqual({
              ...rest,
              ...updates
            });
          });
      });
    });
  });

  describe('start remove song action generator', () => {
    describe('given a song id', () => {
      const id = songs[2].id;

      beforeAll(setupStoreAndDatabase);

      it('dispatches a valid remove song action', () => {
        const action = startRemoveSong(id);

        store.dispatch(action).then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual({
            type: 'REMOVE_SONG',
            id
          });
        });
      });

      it('removes a song from the database upon being dispatched', () => {
        return database.ref(`users/${uid}/songs/${id}`)
          .once('value')
          .then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
          });
      });
    });
  });
});
