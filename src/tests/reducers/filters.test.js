import filtersReducer from '../../reducers/filters';
import { setTextFilter } from '../../actions/filters';

test('text filter gets set in the next state', () => {
  const state = {};
  const textFilter = 'hello';
  const action = setTextFilter(textFilter);
  expect(filtersReducer(state, action)).toEqual({
    text: textFilter
  });
});
