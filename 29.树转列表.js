// [
//     {
//         id: 1,
//         text: '节点1',
//         parentId: 0,
//         children: [
//             {
//                 id:2,
//                 text: '节点1_1',
//                 parentId:1
//             }
//         ]
//     }
// ]
// 转成
// [
//     {
//         id: 1,
//         text: '节点1',
//         parentId: 0 //这里用0表示为顶级节点
//     },
//     {
//         id: 2,
//         text: '节点1_1',
//         parentId: 1 //通过这个字段来确定子父级
//     }
//     ...
// ]

function TransTreeToList(data) {
    let res = [];
    // 如果tree没有告知parent,可以通过parent来获取
    function dfs(tree, parent) {
        tree.forEach(item => {
            if(item.children) {
                dfs(item.children, item.id)
                delete item.children;
            }
            res.push(item);
        });
    }
    dfs(data, 0);
    return res;
}