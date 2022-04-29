/**
 * @note 实现一个简单的Promise
 * @author czy233983@alibaba-inc.com
 * @date 2021-07-21 22:05:13
 * @Last Modified by: czy233983@alibaba-inc.com
 * @Last Modified time: 2021-07-21 22:19:20
 */

class MyPromise {
  constructor(fn) {
    this.successCallback = [];
    this.failCallback = [];
    this.state = "pending";

    let resolve = (val) => {
      if (this.state === "pending") {
        this.state = "success";
        setTimeout(() => {
          this.successCallback.forEach((item) => {
            item.apply(this, val);
          });
        }, 0);
      }
    };
    let reject = (err) => {
      if (this.state === "pending") {
        this.state = "fail";
        setTimeout(() => {
          this.failCallback.forEach((item) => {
            item.apply(this, err);
          });
        }, 0);
      }
    };
    try {
      fn(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(resloveCallback, rejectCallback) {
    rejectCallback =
      typeof rejectCallback !== "function"
        ? (err) => {
            throw err;
          }
        : rejectCallback;

    resloveCallback =
      typeof resloveCallback !== "function" ? (v) => v : resloveCallback;
    rejectCallback =
      typeof rejectCallback !== "function"
        ? (err) => {
            throw err;
          }
        : rejectCallback;
    return new MyPromise((reslove, reject) => {
      this.successCallback.push((val) => {
        try {
          let x = resloveCallback(val);
          if (x instanceof MyPromise) {
            return x.then(reslove, reject);
          } else {
            reslove(x);
          }
        } catch (error) {
          reject(x);
        }
      });

      this.failCallback.push((val) => {
        try {
          let x = rejectCallback(val);
          if (x instanceof MyPromise) {
            return x.then(reslove, reject);
          } else {
            reslove(x);
          }
        } catch (error) {
          reject(x);
        }
      });
    });
  }
}
