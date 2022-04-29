function myNew(Con, ...res) {
  let obj = {};
  obj.__proto__ = Con.prototype;
  //   let obj = Object.create(Con.prototype)
  let res = Con.apply(this, res);

  if (typeof res === "object") {
    return res;
  }
  return obj;
}
