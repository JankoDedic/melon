import { login, logout } from '../../actions/auth';

test('login action gets generated', () => {
  const uid = 'sample uid';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('logout action gets generated', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});


