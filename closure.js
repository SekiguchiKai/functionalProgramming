
/**
 * クロージャー
 * 関数の中にある関数で、外側の関数の中にある変数を参照している関数
 */

function OuterFunc(a) {
    // 外側の関数の中にある変数
    var a;

    // クロージャー（関数の中にある関数で、外側の関数の中にある変数を参照している関数）
    var InnerFunc = function () {
        return a + 7;
    }
    return InnerFunc;
}

var myFunc = OuterFunc(100);

console.log(myFunc());




