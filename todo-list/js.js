// eslint-disable-next-line no-extend-native
Array.prototype.myJoin = function(sym) {
    const arr = this;
    const len = arr.length;
    let idx = 0;
    let result = '';

    for (idx; idx < len; idx++) {
        const el = arr[idx];
        if (idx === len - 1) {
            result += String(el);
            break;
        }
        result += (String(el) + sym);
    }
    return result;
}

let arr = ['World', 'Popa', 'implementation', 'Inex of element', 'ECMASCRIPT6'];

let b = arr.myJoin(',');

console.log(b);