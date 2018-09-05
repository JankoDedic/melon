import { setTextFilter } from '../../actions/filters';

test('action for setting text filter gets generated', () => {
  const text = 'this is some sample text';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});
