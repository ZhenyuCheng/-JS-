/**
 * @note 实现lazyMan
 * @author czy233983@alibaba-inc.com
 * @date 2021-07-21 19:55:21
 * @Last Modified by: czy233983@alibaba-inc.com
 * @Last Modified time: 2021-07-21 20:09:08
 */
// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan("Hank")输出:
// Hi! This is Hank!

// LazyMan("Hank").sleep(10).eat("dinner")输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan("Hank").eat("dinner").eat("supper")输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan("Hank").eat("supper").sleepFirst(5)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper

class _LazyMan {
  constructor(name) {
    this.name = name;
    this.task = [
      () => {
        console.log(`Hi this is ${name}`);
      },
    ];
    setTimeout(() => {
      this.next();
    }, 0);
  }

  next() {
    let task = this.task.shift();
    task && task();
  }

  sleep(time) {
    this.task.push(() => {
      console.log(`Wake up after ${time}s`);

      setTimeout(() => {
        this.next();
      }, time * 1000);
    });
    return this;
  }

  eat(food) {
    this.task.push(() => {
      console.log(`eat ${food}`);
      this.next();
    });
    return this;
  }

  sleepFirst(time) {
    this.task.unshift(() => {
      console.log(`Wake up after ${time}s`);
      setTimeout(() => {
        this.next();
      }, time * 1000);
    });
    return this;
  }
}

function LazyMan(name) {
  return new _LazyMan(name);
}

// LazyMan("Hank").sleep(10).eat("dinner");
// LazyMan("Hank").eat("dinner").eat("supper");
LazyMan("Hank").eat("supper").sleepFirst(5);
