/**
 * <div>
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>

把上诉dom结构转成下面的JSON格式

{
  tag: 'DIV',
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}

 */


function dom2Json( tree) {
    let obj = {};
    obj.tag = tree.tagName;
    obj.children = [];
    tree.childNodes.forEach(element => {
        obj.children.push(dom2Json(element))
    });
    return obj;
}

// 如果给定html片段，则比较复杂，需要通过正则进行模板解析https://juejin.cn/post/6936024530016010276
// 找到开闭合标签，通过栈进行匹配，构造ast树