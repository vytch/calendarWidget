const setIsSearching = () => {
  return {
    type: 'TOGGLE_SEARCHING',
  };
};

const updateMonthYear = val => {
  return {
    type: 'UPDATE_MONTHYEAR',
    val,
  };
};

export {
  setIsSearching,
  updateMonthYear,
};
