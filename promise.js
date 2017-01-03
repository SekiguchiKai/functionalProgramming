// PromiseAPI

// Promiseオブジェクトをインスタンス化
// Promiseのコンストラクタには、関数を渡す
var promise = new Promise((resolve) => {
    resolve('sekky0905');
});

promise.then((name) => {
    {
        console.log(`${name} さん、こんにちは!`);
    }
}).catch((error) => {
    console.error(error);
})

var A = (name) => {
    console.log(`${name} さん、こんにちは!`);
}

A('あああ');