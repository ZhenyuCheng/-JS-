

// 方法一 利用set
function uniqueArr1(args) {
    return [...new Set(args)]
}

// 方法二 用map记录，进行遍历

function uniqueArr2(args) {
    let map = {};
    return args.filter( item => {
        map[item] = ( map[item] || 0) + 1;
        return map[item] == 1
    })
}

console.log(uniqueArr1([1,2,3,4,3]))
console.log(uniqueArr2([1,2,3,4,3]))
