const input = document.querySelector( 'input' )


function update( _v ) // input tag を更新する関数
{
    input.value = _v;
};

function append( _v ) // 数字ボタンが押されたので数字を後ろに追加する→+-の力
{
    input.value += _v;
    //「querySelector()」を使うとid属性値・class属性値などを意識せずにjQuery感覚でHTML要素をセレクタ指定することができる
};

function calc() // 「＝」ボタンが押されたので計算する
{
    const v = input.value;
     {
        const f = new Function( 'return ' + v );

// 電卓を['5' '-' '2' '=']と入力すると
//consoleの結果は

// console.log(v)→5-2

// console.log(f)↓
// ƒ anonymous() {
// return 5-2
// }

        update( f().toString() );
// (return 5-2)を{toString()}→'文字列で表す'ので「3をupdateにreturnする」
    };
};
