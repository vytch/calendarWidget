const debounce = (func, wait, immediate) => {
  let timeout;
  return function(...args) {
    console.log('test');
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) {
        func.apply(this, args);
      };
    }, wait);
    if (immediate && !timeout) {
      func.apply(this, [...args]);
    }
  };
};

export default debounce;
