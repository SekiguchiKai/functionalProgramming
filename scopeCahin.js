/**
 * スコープチェーン
 * ざっくり言うと、変数を関数の内側から探して行って一番最初に見つかった変数を参照する
 */

var a = 'グローバル変数';

function outer() {
    var a = 'outer関数のローカル変数';
    console.log('1番目の呼び出し' + a);

    function inner() {
        var a = 'innner関数のローカル変数';
        console.log('2番目の呼び出し' + a);
    }

    inner();
}

outer();

console.log('3番目の呼び出し' + a);


// 1番目の呼び出しouter関数のローカル変数
// 2番目の呼び出しinnner関数のローカル変数
// 3番目の呼び出しグローバル変数