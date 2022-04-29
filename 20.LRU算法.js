/**
 * 
 * 运用你所掌握的数据结构，设计和实现一个LRU （最近最少使用）缓存机制。它应该支持以下操作：获取数据get和写入数据
put 。
获取数据get （key）-如果密钥（key）存在于缓存中，则获取密钥的值（总是正数），否则返回-1。
写入数据put （key, value）-如果密钥区存在，则变更其数据值；如果密钥不存在，则插入该组「密钥/数据值」。当缓存容量 
达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
进阶: 
你是否可以在0（1）时间复杂度内完成这两种操作?
示例:
LRUCache cache = new LRUCache(2) // 缓存容量
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);//返回1
cache.put(3, 3);//该操作会使得密钥2作废
cache.get(2);//返回-1 （未找到）
cache.put(4, 4);//该操作会使得密钥1作废
cache.get(1);//返回-1 （未找到）
cache.get (3);//返回3
cache.get (4);//返回4

*/

//  一个Map对象在迭代时会根据对象中元素的插入顺序来进行
// js中map遍历的顺序是按照插入的顺序来执行的。
// 如果map的来源是字符串转换的，那么就会按照字符串中key值的顺序进行遍历。
// 千万不要被debug中显示的顺序误导，这里应该是为了方便查看对key进行了字母顺序排序。

// 如果不使用map，需要用栈来维持，
// 或者用{}记录最近一次的修改时间 
class LRUCache{
    constructor(count) {
        this.maxCount = count;
        this.keys = new Map();
    }

    get(key) {
        if(this.keys.has(key)) {
            let val = this.keys.get(key);
            this.keys.delete(key);
            this.keys.set(key, val)
            return val;
        } else {
            return -1;
        }
    }
    put(key, val) {
        if(this.keys.has(key)) {
            this.keys.delete(key);
            this.keys.set(key, val);
        } else if(this.keys.size < this.maxCount) {
            this.keys.set(key, val);
        } else {
            this.keys.set(key, val);
            // console.log('----',this.keys.keys().next())
            //注意 set.keys() 返回的是一个遍历器对象，通过next()获取{ value: 2, done: false }形式的值
            this.keys.delete(this.keys.keys().next().value);
        }
    }
}

let cache = new LRUCache(2) // 缓存容量
console.log(cache.put(1, 1))
console.log(cache.put(2, 2));
console.log(cache.get(1));//返回1
console.log(cache.put(3, 3));//该操作会使得密钥2作废
console.log(cache.get(2));//返回-1 （未找到）
console.log(cache.put(4, 4));//该操作会使得密钥1作废
console.log(cache.get(1));//返回-1 （未找到）
console.log(cache.get (3));//返回3
console.log(cache.get (4));//返回4