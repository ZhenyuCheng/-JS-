

function getPath(data, target) {
    let ans = [];
    function itr(arr, currentPath =[]) {
        console.log(currentPath)
        for(let i=0;i<arr.length;i++) {
            if(arr[i].id === target) {
                ans = [...currentPath,arr[i].id];
            } else if(arr[i].children && Array.isArray(arr[i].children) && arr[i].children.length){
                console.log( '----', [...currentPath,arr[i].id])
                itr(arr[i].children, [...currentPath,arr[i].id]);
            }
        }
    }

    itr(data, []);
    console.log(ans);
    return ans;
}

const data = [{
    id: '1',
    name: 'test1',
    children: [
        {
            id: '11',
            name: 'test11',
            children: [
                {
                    id: '111',
                    name: 'test111'
                },
                {
                    id: '112',
                    name: 'test112'
                }
            ]

        },
        {
            id: '12',
            name: 'test12',
            children: [
                {
                    id: '121',
                    name: 'test121'
                },
                {
                    id: '122',
                    name: 'test122'
                }
            ]
        }
    ]
}];

getPath(data, '112')