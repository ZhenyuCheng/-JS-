class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(type, fn) {
    if (this.events[type]) {
      this.events[type].push(fn);
    } else {
      this.events[type] = [fn];
    }
  }

  emit(type, ...args) {
    let fns = this.events[type];
    if (fns && Array.isArray(fns)) {
      fns.forEach((fn) => {
        fn(args);
      });
    }
  }

  off(type, fn) {
    if (this.events[type]) {
      this.events[type] = this.events[type].filter((item) => item !== fn);
    }
  }

  once(type, fn) {
    let cb = (args) => {
      fn(args);
      this.off(type, cb); // 注意这里取消的是cb
    };
    this.on(type, cb);
  }
}

const event = new EventEmitter();

const handle = (...rest) => {
  console.log(rest);
};

// event.on("click", handle);

// event.emit("click", 1, 2, 3, 4);

// event.off("click", handle);

// event.emit("click", 1, 2);

event.once("dbClick", () => {
  console.log(123456);
});
event.emit("dbClick");
event.emit("dbClick");
