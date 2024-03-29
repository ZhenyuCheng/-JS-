// 实现 mergePromise
// 最后输出: 1, 2, 3 'done' [1, 2, 3]
let timeout = ms => new Promise((resolve, reject) => {
	setTimeout(() => resolve(), ms);
});

const ajax1 = () => timeout(2000).then(() => {
	console.log('1');
	return 1;
});

const ajax2 = () => timeout(1000).then(() => {
	console.log('2');
	return 2;
});

const ajax3 = () => timeout(2000).then(() => {
	console.log('3');
	return 3;
});

const mergePromise = (ajaxArray) => {
    let ans = [];
    return new Promise((resolve, reject) =>{
        ajaxArray.reduce((pre, current)=> {
            return pre.then(() => {
                return current().then((data)=>{
                    ans.push(data)
                    return Promise.resolve()
                });
            });
        }, Promise.resolve()).then(()=>{
            resolve(ans);
        })
    })
};

mergePromise([ajax1, ajax2, ajax3])
	.then((data) => {
		console.log('done');
		console.log(data);
	});