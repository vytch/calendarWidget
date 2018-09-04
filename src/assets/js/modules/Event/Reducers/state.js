import { formatDate, addSubtract } from 'js-utils/formatDate';

const theState = {
  isSearching: false,
  selectedDate: formatDate({}, 'YYYYMMDD'),
  minMax: {
    min: addSubtract({ amount: -17 }),
    max: addSubtract({ amount: 2 }),
  },
  search: {
    loading: false,
    keywords: null,
    categories: [],
    tags: [],
    range: {
      start: null,
      end: null,
    },
    searchResults: [],
    error: null,
  },
};

export default {
  theState,
};
