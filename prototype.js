// コンストラクタ
var ProgramLang = function (name) {
    this.name = name;
}

// prototypeプロpティにgetNameメソッドを追加
ProgramLang.prototype.getName = function () {
    return this.name;
}

var Java = new ProgramLang('Java');
var JavaScript = new ProgramLang('JavaScript');

console.log(Java.getName());
console.log(JavaScript.getName());


// コンストラクタ
var ProgramLang2 = function (staticLang, dynamicLang) {
    this.staticLang = staticLang;
    this.dynamicLang = dynamicLang;
}

// オブジェクトリテラルでのprototypeプロパティへの登録
ProgramLang2.prototype = {
    getStaticLang: function () { return this.staticLang; },
    getDynamicLang: function () { return this.dynamicLang; }
}

var staticProLang = new ProgramLang2('TypeScript');
var dynamicProLang = new ProgramLang2('JavaScript')

console.log(staticProLang.getStaticLang());
console.log(dynamicProLang.getDynamicLang());