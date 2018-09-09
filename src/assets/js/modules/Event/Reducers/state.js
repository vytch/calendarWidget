import { formatDate, addSubtract } from 'js-utils/formatDate';

const theState = {
  appLoading: false,
  globalError: null,
  categoryLoading: false,
  introContent: {
    title: null,
    body: null,
  },
  selectedDate: formatDate({}, 'YYYYMMDD'),
  minMax: {
    min: addSubtract({ amount: -17 }),
    max: addSubtract({ amount: 2 }),
  },
  categories: [],
  eventTypes: [],
  events: [],
  terms: [],
  publicHolidays: [],
  search: {
    loading: false,
    keywords: null,
    categories: [],
    tags: [],
    start: null,
    end: null,
    searchResults: [],
    error: null,
  },
};

export default {
  theState,
};
