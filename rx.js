let rx = require('rx');

let array = ['Java', 'JavaScript', 'TypeScript'];
let stream = rx.Observable.fromArray(array);

stream.subscribe((proLang) => console.log(proLang));


// 【filter】偶数だけ処理する
let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let numStream = rx.Observable.fromArray(numArray);

numStream.filter(num => num % 2 === 0).subscribe(filtered => console.log(filtered));

// 【map】入力を返還する
numStream.map((num) => {
    let alphabet = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return alphabet[num];
})
    .subscribe(alphabet => console.log(alphabet));

