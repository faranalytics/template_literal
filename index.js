import { readFileSync } from 'fs';

function message() {
    return 'Something wonderful...';
}

let a = '`' + readFileSync('./index.html') + '`';

let b = eval(a)

console.log(b);