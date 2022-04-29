const controller = new AbortController();
const { signal } = controller;
fetch("http://localhost:8000", { signal })
  .then(() => {
    // 注意400、500之类的也会走到then里面
    console.log("complete");
  })
  .catch(() => {
    console.log("error");
  });

setTimeout(() => {
  controller.abort();
}, 1000);
