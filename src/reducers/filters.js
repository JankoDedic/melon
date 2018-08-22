const defaultFiltersState = {
  text: '',
};

export default (filters = defaultFiltersState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...filters, text: action.text };
    default:
      return filters;
  }
};
