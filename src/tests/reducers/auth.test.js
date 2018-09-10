import authReducer from '../../reducers/auth';

describe('given an empty state and login action', () => {
  const uid = 'testuid';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = {};

  it('sets the uid', () => {
    const newState = authReducer(state, action);

    expect(newState).toEqual({ uid });
  });
});

describe('given some state and logout action', () => {
  const state = {
    uid: 'someuid'
  };
  const action = {
    type: 'LOGOUT'
  };

  it('removes the uid', () => {
    const newState = authReducer(state, action);

    expect(newState).toEqual({});
  });
});
