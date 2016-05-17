
document.writeln ('<hr />');
document.write ('<a name="MyFunction1">MyFunction(1)</a>');
document.writeln ('<hr />');

// ------------------------------------------------------------
// MyFunction1 という名前の関数を宣言する
// ------------------------------------------------------------
function MyFunction1 (argument1 , argument2) {
    var v = argument1 + argument2;
    return v;
}
// ------------------------------------------------------------
// MyFunction1 という関数を実行して、結果を得る
// ------------------------------------------------------------
var result = MyFunction1(1,2);

document.write ('result : ' + result);

document.writeln ('<hr />');
document.write ('<a name="MyFunction2">MyFunction(2)</a>');
document.writeln ('<hr />');

// ------------------------------------------------------------
// MyFunction2 という名前の関数を宣言する
// ------------------------------------------------------------
function MyFunction2 (argument1 , argument2) {
    var v = argument1 + argument2;
    return v;
}

// ------------------------------------------------------------
// 関数オブジェクトを取得する
// ------------------------------------------------------------
var function_object2 = MyFunction2;

// 出力テスト
console.log(function_object2);
document.write ('function_object2 : ' + function_object2);

document.writeln ('<hr />');
document.write ('<a name="MyFunction3">MyFunction(3)</a>');
document.writeln ('<hr />');

// ------------------------------------------------------------
// 各関数を実行して、結果を得る（グローバルな関数宣言は、関数宣言をプログラムの後方に記述しても動作する）
// ------------------------------------------------------------
var a = MyFunction_A(1,2);
var b = MyFunction_B(6,5);
var c = MyFunction_C(3,4);

// 出力テスト
console.log(a); // 3
console.log(b); // 1
console.log(c); // 12

document.write ('a : ' + a + 'b : ' + b + 'c : ' + c );

// ------------------------------------------------------------
// MyFunction_A という名前の関数を宣言する
// ------------------------------------------------------------
function MyFunction_A (argument1 , argument2) {
    var v = argument1 + argument2;
    return v;
}

// ------------------------------------------------------------
// MyFunction_B という名前の関数を宣言する
// ------------------------------------------------------------
function MyFunction_B (argument1 , argument2) {
    var v = argument1 - argument2;
    return v;
}

// ------------------------------------------------------------
// MyFunction_C という名前の関数を宣言する
// ------------------------------------------------------------
function MyFunction_C (argument1 , argument2) {
    var v = argument1 * argument2;
    return v;
}

document.writeln ('<hr />');
document.write ('<a name="MyFunction4">MyFunction(4)</a>');
document.writeln ('<hr />');

// ------------------------------------------------------------
// MyFunction_G という名前の関数を宣言する（グローバルな関数宣言）
// ------------------------------------------------------------
function MyFunction_G (argument) {
    
    // ------------------------------------------------------------
    // ローカル変数
    // ------------------------------------------------------------
    var _variable_ = argument;
    
    // ------------------------------------------------------------
    // MyFunction_L という名前の関数を宣言する（ローカルな関数宣言）
    // ------------------------------------------------------------
    function MyFunction_L () {
        return _variable_;
    }
    
    // ------------------------------------------------------------
    // ローカルな関数オブジェクトを返す
    // ------------------------------------------------------------
    return MyFunction_L;
}

// ------------------------------------------------------------
// グローバルな関数を実行して、ローカルな関数オブジェクトを取得する
// ------------------------------------------------------------
var function_object0 = MyFunction_G("テスト１");
var function_object1 = MyFunction_G("テスト２");

// ------------------------------------------------------------
// ローカルな関数オブジェクトを実行する
// ------------------------------------------------------------
console.log(function_object0()); // "テスト１"
console.log(function_object1()); // "テスト２"

// ------------------------------------------------------------
// ローカルな関数オブジェクト同士を比較しても一致しない（新しく関数オブジェクトが生成されているため）
// ------------------------------------------------------------
console.log(function_object0 == function_object1); // false

document.write ('function_object0 : ' + function_object0());
document.write ('function_object1 : ' + function_object1());
document.write ('(function_object0 == function_object1) : ' + (function_object0 == function_object1));

document.writeln ('<hr />');
document.write ('<a name="MyFunction5">MyFunction(5)</a>');
document.writeln ('<hr />');

// ------------------------------------------------------------
// 関数オブジェクトを動的に生成して、変数に格納する
// ------------------------------------------------------------
var function5_object = function (argument1 , argument2){
    
    var v = argument1 + argument2;
    
    return v;
}


// ------------------------------------------------------------
// 関数オブジェクトを実行して、結果を得る
// ------------------------------------------------------------
var result = function5_object(3,5);

document.write ('result : ', function5_object(3,5));

document.writeln ('<hr />');
document.write ('<a name="MyFunction6">MyFunction(6)</a>');
document.writeln ('<hr />');

// ------------------------------------------------------------
// 関数リテラルを使って、関数オブジェクトを作成する（関数名も記述）
// ------------------------------------------------------------
var function6_object = function MyFunction6() {
    // ------------------------------------------------------------
    // 自身の関数オブジェクトを取得する（関数名を使用）
    // ------------------------------------------------------------
    console.log(MyFunction6);
    
    //document.write ('MyFunction6 : ' + '<pre>' + MyFunction6 + '</pre>');
    
    // 比較テスト
    console.log(function6_object === MyFunction6); // true
    
    document.writeln ('<hr />');
    document.write ('(function6_object === MyFunction6) : ' + (function6_object === MyFunction6));
    document.writeln ('<hr />');
    // ------------------------------------------------------------
    // 自身の関数オブジェクトを取得する
    // ------------------------------------------------------------
    console.log(arguments.callee);
    
    //document.write ('(arguments.callee)' + '<pre>' + arguments.callee + '</pre>');
    // 比較テスト
    console.log(function6_object === arguments.callee); // true
    
    document.writeln ('<hr />');
    document.write ('(function6_object === arguments.callee) : ' + (function6_object === arguments.callee));
    
};

// ------------------------------------------------------------
// 関数オブジェクトを実行する
// ------------------------------------------------------------
function6_object();

document.writeln ('<hr />');
document.write ('<a name="MyFunction7">MyFunction(7)</a>');
document.writeln ('<hr />');

// ------------------------------------------------------------
// 匿名関数を即時実行する（スコープとして機能する）
// ------------------------------------------------------------
(function () {
 // ローカル変数を用意する
 var local_a = 123;
 var local_b = "あいうえお";
 
 // 出力テスト
 console.log(local_a);
 console.log(local_b);
 document.write ('local_a : ' + local_a);
 document.write ('local_b : ' + local_b);
 
 })();
// ------------------------------------------------------------
// アクセステスト
// ------------------------------------------------------------
try {
    // ×関数スコープの外からローカル変数にアクセスできない
    console.log(local_a);
    document.write ('local_a : ' + local_a);
} catch (e) {
    console.log(e);
    document.write ('e : ' + e);
}
try {
    // ×関数スコープの外からローカル変数にアクセスできない
    console.log(local_b);
    document.write ('local_b : ' + local_b);
} catch (e) {
    console.log(e);
    document.write ('e : ' + e);
}

document.writeln ('<hr />');
document.write ('<a name="MyFunction8">MyFunction(8)</a>');
document.writeln ('<hr />');
// ------------------------------------------------------------
// Function コンストラクタを使って、関数オブジェクトを作成
// ------------------------------------------------------------
var function8_object = new Function("argument1","argument2","var v = argument1 + argument2;return v;");


// ------------------------------------------------------------
// 関数オブジェクトを実行して、結果を得る
// ------------------------------------------------------------
var result8 = function8_object(1,2);
console.log(result8);
document.write ('result8 : ' + result8);
