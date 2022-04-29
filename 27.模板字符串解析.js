let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}

function parse(str= '', data) {
    return str.replace(/{{(\w+)}}/g, (match, key) => {
        return data[key];
    })
}

console.log(parse(template, data));
// 我是姓名，年龄18，性别undefined

let template1 = '第一个${data[0]}，第二个${data[1]}, 第三个${data[2]}';
function parse1(str, data) {
  return str.replace(/\${(.+?)}/g, (match, key) => {
    return eval(key);
})
}
console.log(parse1(template1, [1,2,3]))