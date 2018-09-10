import filtersReducer from '../../reducers/filters';
import { setTextFilter } from '../../actions/filters';

describe('given an empty state and set text filter action', () => {
  const state = {};
  const textFilter = 'hello';
  const action = setTextFilter(textFilter);

  it('sets the text filter', () => {
    const newState = filtersReducer(state, action);

    expect(newState).toEqual({
      text: textFilter
    });
  });
});
