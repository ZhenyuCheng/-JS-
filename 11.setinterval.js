function mySetinterval(fn, delay) {
  let timer;
  function inteval() {
    timer = setTimeout(() => {
      fn();
      inteval();
    }, delay);
  }
  inteval();
  return {
    cancel: () => {
      clearTimeout(timer);
    },
  };
}

mySetinterval(() => {
  console.log(new Date().getTime());
}, 1000);
