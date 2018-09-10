import { setTextFilter } from '../../actions/filters';

describe('set text filter action generator', () => {
  describe('given some text', () => {
    const text = 'this is some sample text';

    it('generates a valid action', () => {
      const action = setTextFilter(text);

      expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
      });
    });
  });
});
