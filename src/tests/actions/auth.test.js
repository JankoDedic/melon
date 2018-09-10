import { login, logout } from '../../actions/auth';

describe('login action generator', () => {
  describe('given a uid string', () => {
    const uid = 'sample uid';

    it('generates a valid action', () => {
      const action = login(uid);
      expect(action).toEqual({
        type: 'LOGIN',
        uid
      });
    });
  });
});

describe('logout action generator', () => {
  it('generates a valid action', () => {
    const action = logout();

    expect(action).toEqual({
      type: 'LOGOUT'
    });
  });
});
