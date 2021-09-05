const num_bth = document.querySelectorAll('.num_bth');
let output_sub = document.getElementById('output_sub');
let total = '';//計算式を表す変数
let state = 'start';//最初の状態
let mode = 'integer_mode';//最初は整数で入力

  // 1-9の数字ボタンを押した時
  const one_nine = document.querySelectorAll('.one_nine');
  one_nine.forEach(index => {     
    index.addEventListener('click', () => {
      if(state === 'start') {
        //最初totalに打った数字を代入する
        total = index.dataset.indexId;         
      }else if(state === 'finish') {
        //計算後、リセット処理後に、totalに打った数字を代入する
        reset();
        total = index.dataset.indexId;  
      }else if(state === 'calculation'){
        //計算中totalに打った数字を追加して、totalに代入する。
        total += index.dataset.indexId;
      }     
      output_sub.textContent = total;
      state = 'calculation'//数字を入力している状態にする。
    });   
  });

//0のボタンを押した時
const zero = document.getElementById('zero');

zero.addEventListener('click',() => {//ゼロが押された時
        if(state==='start'||state==='finish'||state==='calBtn'){
                if(output_sub.textContent.slice(-1) === '0') {
                  //sliceで切り出されたのは0ではなく'0'
                  console.log('前の文字はゼロ');
                  return;
                }
        }
        console.log(zero.dataset.indexId)
        if(total === 0) {
                total = zero.dateset.indexId;
        }else{
                total += zero.dataset.indexId;
        }
        output_sub.textContent = total;
        state = 'calculation';
});

//'.'を押した時
const point = document.getElementById('point');
point.addEventListener('click', () => {
        console.log(point.dataset.indexId)
        if(mode === 'decimal_mode'){
                return;//一回'.'を押したらmode === 'decimal_mode'になっている
        }

        if(state === 'start' || state === 'finish'){
                total = 0;//何も押されていない'0'の時
        }
        total += point.dataset.indexId;
        
        output_sub.textContent = total;
        state = 'calculation';//数字を入力している状態
        mode = 'decimal_mode';//小数入力モードに変更
})


//演算子ボタンを押した時
const cal = document.querySelectorAll('.cal');
cal.forEach(index => {
        index.addEventListener('click', () => {//最初に演算子は押せない
                if(state === 'start') {//数字ボタンが押されたらstateは'calculation'となっているはずなので
                        return;//以下の処理を行わない（output_subに表示されない）
                }else if(state === 'calculation'){
                        total += index.dataset.indexId;
                }else if(state === 'finish'){
                        total = output_sub.textContent;
                        total += index.dataset.indexId;
                        output_sub.textContent = 0;
                }else if(state === 'calBtn') {//２回連続で押された場合
                        total = total.slice(0,-1)//最初に押された演算子より前の文字列を取り出して
                        total += index.dataset.indexId;//2回目に押された演算子を追加する
                }
                output_sub.textContent = total;
                state = 'calBtn';//演算記号を入力している状態
                mode = 'integer_mode';
        });
}) ;

const equal_btn = document.getElementById('equal_btn');

equal_btn.addEventListener('click',() =>{
        console.log(eval(total));
        output_sub.textContent = eval(total);
        state = 'finish';
});

//リセットを行う関数
function reset() {
        total = 0; 
        output_sub.textContent = 0;
       }

const clear = document.getElementById('clear')
clear.addEventListener('click',() => {
        reset();
        total = '';
        state = 'start';
        mode = 'integer_mode';
});
