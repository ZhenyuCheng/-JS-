//  addTask(1000,"1");
//  addTask(500,"2");
//  addTask(300,"3");
//  addTask(400,"4");
//  的输出顺序是：2 3 1 4

//  整个的完整执行流程：

// 一开始1、2两个任务开始执行
// 500ms时，2任务执行完毕，输出2，任务3开始执行
// 800ms时，3任务执行完毕，输出3，任务4开始执行
// 1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
// 1200ms时，4任务执行完毕，输出4

class Scheduler {
  constructor(count) {
    this.maxCount = count || 0;
    this.runCount = 0;
    this.queue = [];
  }

  add(promise1) {
    this.queue.push(promise1);
    this.run(); // 可选，不写的话需要手动触发run
  }

  run() {
    while (this.runCount < this.maxCount && this.queue.length) {
      let task = this.queue.shift();
      this.runCount++;
      task().then(() => {
        this.runCount--;
        this.run();
      });
    }
  }
}

let scheduler = new Scheduler(2);
const addTask = (delay, str) => {
    // 注意这里要写成函数返回一个promise，直接写成Promise会立即执行，导致无法做并发控制
  let promise1 = () => {
    return new Promise((reslove) => {
      setTimeout(() => {
        reslove(str);
      }, delay);
    }).then(() => {
      console.log(str);
      return Promise.resolve();
    });
  };
  scheduler.add(promise1);
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
