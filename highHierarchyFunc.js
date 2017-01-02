
// 高階関数
function sayName(greet) {
    return greet('sekky0905さん');
}
function greet(name) {
    return (name + "こんにちは");
}
alert(sayName(greet));

// 高階関数2
function calcTotal() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    return total;
}

function calcTax(calc) {
    return calc * 1.08;
}

alert(calcTax(calcTotal(100, 200, 300)));