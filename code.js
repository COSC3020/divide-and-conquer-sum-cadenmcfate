function divideAndConquerSum(a) {
    let obj = { sum:0 }
    dsum(a, obj);
    return obj.sum;
}

function dsum(a, obj) {
    if (a.length === 0) return;
    else if (a.length === 1) {
	obj.sum += a[0];
	return;
    } else {
	var mid1 = Math.floor(a.length/3);
	var mid2 = (mid1===0) ? 1 : mid1*2;
	dsum(a.slice(0,mid1), obj);
	dsum(a.slice(mid1,mid2), obj);
	dsum(a.slice(mid2,a.length), obj);
    }
}
