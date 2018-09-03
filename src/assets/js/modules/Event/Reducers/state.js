import { formatDate, addSubtract } from 'js-utils/formatDate';

const theState = {
  isSearching: false,
  selectedDate: formatDate({}, 'YYYYMMDD'),
  minMax: {
    min: addSubtract({ amount: -17 }),
    max: addSubtract({ amount: 2 }),
  },
  search: {
    loading: true,
    keywords: null,
    categories: [],
    tags: [],
    range: {
      start: null,
      end: null,
    },
    searchResults: [],
  },
};

export default {
  theState,
};
