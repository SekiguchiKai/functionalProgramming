
// 高階関数
function sayName(greet) {
    return greet('sekky0905さん');
}
function greet(name) {
    return (name + "こんにちは");
}
alert(sayName(greet));