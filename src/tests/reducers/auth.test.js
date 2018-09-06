import authReducer from '../../reducers/auth';

test('login action sets the uid', () => {
  const uid = 'testuid';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = {};
  const newState = authReducer(state, action);
  expect(newState).toEqual({
    uid
  });
});

test('logout action removes the uid', () => {
  const state = {
    uid: 'someuid'
  };
  const action = {
    type: 'LOGOUT'
  };
  const newState = authReducer(state, action);
  expect(newState).toEqual({});
});
