const arrayLike=document.querySelectorAll('div')


let arr = [...arrayLike];
arr = Array.from(arrayLike);

Array.prototype.slice.call(arrayLike);
Array.prototype.concat.apply([],arrayLike);
Array.apply(null, arrayLike)
