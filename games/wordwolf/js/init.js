//var jsonData = "";
//var htmlData = JSON.parse(decodeURIComponent(jsonData));
//alert("OK");

function Point(){
    this.x = 0;
    this.y = 0;
}

// - global -------------------------------------------------------------------
var screenCanvas, info;
var gameView;
var run = true;
var fps = 1000 / 30;
var mouse = new Point();
var gameMouse = new Point();

var data = {
    "プレイ人数":"8",
    "少数派の人数":"2",
    "多数派の人数":"6",
    "お題の難易度":"0",
    "名前の設定":"0",
    "スタート":"今から各プレイヤーにお題を伝えます。\n準備ができたら「OKボタン」を押してください。",
    "players":
        [
         {
         "name":"プレイヤー1",
         "item":"かぼちゃ",
         },
         {
         "name":"プレイヤー2",
         "item":"かぼちゃ",
         },
         {
         "name":"プレイヤー3",
         "item":"モンブラン",
         },
    ]
};

// - create ---------------------------------------------------------------------
function action(element,setAction) {
    // イベントの登録
    element.addEventListener('click', setAction, true);
}

// - create ---------------------------------------------------------------------
function create(id) {
    var elm = document.createElement("div"); // 要素を生成
    elm.id = id;
    gameView.appendChild(elm);
    elm.innerHTML = id;
    return elm;
}

function createButton(element,title){
    var elm = document.createElement("button"); // 要素を生成
    elm.id = element.id + title;
    element.appendChild(elm);
    elm.innerHTML = title;
    return elm;
}

function alertView(message){
    var elm = document.createElement("div"); // 要素を生成
    clearView();
    gameView.appendChild(elm);
    elm.innerHTML = message;
    return elm;
}

function clearView(){
    gameView.innerHTML = "";
}

// - main ---------------------------------------------------------------------
window.onload = function(){
    gameView = document.getElementById("gameView");

    function firstView(){
    
    var playNumber = create("プレイ人数");
    var playN;
    var minP;
    var maxP;
    createButton(playNumber,"+");
    playN = create("プレイ人数playN");
    playN.innerHTML = data["プレイ人数"];
    createButton(playNumber,"-");
    action(document.getElementById(playNumber.id + "+"),function(){
           var n = Number(data["プレイ人数"]);
           var min = Number(data["少数派の人数"]);
           var max = Number(data["多数派の人数"]);
           n = (n + 1);
           if(20 <= n) {
           n = 20;
           }
           max = n - min;
           if(20 <= max) {
           max = 20;
           }
           data["プレイ人数"] = String(n);
           data["多数派の人数"] = String(max);
           playN.innerHTML = data["プレイ人数"];
           minP.innerHTML = data["少数派の人数"];
           maxP.innerHTML = data["多数派の人数"];
           });
    action(document.getElementById(playNumber.id + "-"),function(){
           var n = Number(data["プレイ人数"]);
           var min = Number(data["少数派の人数"]);
           var max = Number(data["多数派の人数"]);
           min = (min - 1);
           if(min < 1) {
           min = 1;
           max = (max - 1);
           if(max < 2) {
           max = 2;
           }
           }
           n = max + min;
           if(20 <= n) {
           n = 20;
           }
           data["プレイ人数"] = String(n);
           data["少数派の人数"] = String(min);
           data["多数派の人数"] = String(max);
           playN.innerHTML = data["プレイ人数"];
           minP.innerHTML = data["少数派の人数"];
           maxP.innerHTML = data["多数派の人数"];
           });
    var minPlayer = create("少数派の人数");
    createButton(minPlayer,"+");
    action(document.getElementById(minPlayer.id + "+"),function(){
           var n = Number(data["プレイ人数"]);
           var min = Number(data["少数派の人数"]);
           var max = Number(data["多数派の人数"]);
           if(min + 1 < max) {
           min = (min + 1);
           } else {
           max = (max + 1);
           }
           n = max + min;
           if (20 <= n) {
           n = 20;
           max = n - min;
           if (min >= max) {
           n = 19;
           min = n - max;
           }
           }
           data["プレイ人数"] = String(n);
           data["少数派の人数"] = String(min);
           data["多数派の人数"] = String(max);
           playN.innerHTML = data["プレイ人数"];
           minP.innerHTML = data["少数派の人数"];
           maxP.innerHTML = data["多数派の人数"];
           });
    minP = create("少数派の人数minP");
    minP.innerHTML = data["少数派の人数"];
    createButton(minPlayer,"-");
    action(document.getElementById(minPlayer.id + "-"),function(){
           var n = Number(data["プレイ人数"]);
           var min = Number(data["少数派の人数"]);
           var max = Number(data["多数派の人数"]);
           min = (min - 1);
           if (min < 1) {
           min = 1;
           if(min < max - 1){
           max = max - 1;
           }
           }
           n = max + min;
           data["プレイ人数"] = String(n);
           data["少数派の人数"] = String(min);
           data["多数派の人数"] = String(max);
           playN.innerHTML = data["プレイ人数"];
           minP.innerHTML = data["少数派の人数"];
           maxP.innerHTML = data["多数派の人数"];
           });
    var maxPlayer = create("多数派の人数");
    createButton(maxPlayer,"+");
    action(document.getElementById(maxPlayer.id + "+"),function(){
           var n = Number(data["プレイ人数"]);
           var min = Number(data["少数派の人数"]);
           var max = Number(data["多数派の人数"]);
           if(max + 1 + min <= 20) {
           max = (max + 1);
           }
           else {
           min = min + 1;
           max = 20 - min;
           if (min >= max) {
           n = 19;
           min = n - max;
           }
           }
           n = max + min;
           data["プレイ人数"] = String(n);
           data["少数派の人数"] = String(min);
           data["多数派の人数"] = String(max);
           playN.innerHTML = data["プレイ人数"];
           minP.innerHTML = data["少数派の人数"];
           maxP.innerHTML = data["多数派の人数"];
           });
    maxP = create("多数派の人数minP");
    maxP.innerHTML = data["多数派の人数"];
    createButton(maxPlayer,"-");
    action(document.getElementById(maxPlayer.id + "-"),function(){
           var n = Number(data["プレイ人数"]);
           var min = Number(data["少数派の人数"]);
           var max = Number(data["多数派の人数"]);
           if (min < max - 1) {
           max = (max - 1);
           }
           if (min < max) {
           min = min - 1;
           }
           n = max + min;
           data["プレイ人数"] = String(n);
           data["少数派の人数"] = String(min);
           data["多数派の人数"] = String(max);
           playN.innerHTML = data["プレイ人数"];
           minP.innerHTML = data["少数派の人数"];
           maxP.innerHTML = data["多数派の人数"];
           });
        function nameInfoAction(){
            alert("nameInfo");
        }
        function startAction(){
            alertView(data["スタート"]);
            var okButton = createButton(gameView,"OK");
            action(okButton,function () {
                   conveyAction(0);
                   });
        }
        function conveyAction(i){
            
            if(i < data["players"].length) {
                alertView(data["players"][i]["name"] + "にお題を伝えます。「OKボタン」を押してください。");
                var okButton = createButton(gameView,"OK");
                action(okButton,function () {
                       conveyMessage(i);
                       });
            } else {
                alertView("それぞれの「お題」について話し合い開始です！！");
                var okButton = createButton(gameView,"OK");
                action(okButton,function () {
                       timeToLeave();
                       });
            }
        }
        function conveyMessage(i) {
            alertView(data["players"][i]["name"] + "のお題は" + data["players"][i]["item"] + "です。確認したら、「OKボタン」を押してください。");
            var okButton = createButton(gameView,"OK");
            action(okButton,function () {
                   var m = Number(i);
                   m++;
                   conveyAction(m);
                   });
            if(i == 0) {
                var editButton = createButton(gameView,"変更");
                action(editButton,function () {
                       startAction();
                       });
            }
        }
        
        function timeToLeave(){
            alertView("残り時間");
            var t = 60*3;
            var timeFlag = true;
            var timeView = alertView(String(t));
            var answerView = create("答え合わせ");
            var increased1MinuteButton = createButton(gameView,"1分増やす");
            action(increased1MinuteButton,function () {
                   t = t + 60;
                   timeView.innerHTML = String(t);
                   });

            var deduce1MinuteButton = createButton(gameView,"1分減らす");
            action(deduce1MinuteButton,function () {
                   t = t - 60;
                   timeView.innerHTML = String(t);
                   });
            
            var stopButton = createButton(gameView,"答え合わせ");
            action(stopButton,function () {
                   timeFlag = false;
                   });
            
            // ループ処理を呼び出す
            (function(){
             t--;
             if(t <= 0) {
                timeFlag = false;
             }
             timeView.innerHTML = String(t);
             // フラグにより再帰呼び出し
             if(timeFlag){
                setTimeout(arguments.callee, 1000);
             } else {
             timeOver();
             }
             })();
        }
        
        var nameInfo = createButton(gameView,"名前の設定");
        action(nameInfo,nameInfoAction);
        var start = createButton(gameView,"スタート");
        action(start,startAction);
        
    };
    
    function timeOver(){
        alertView("時間になりました。せーのでそれぞれ少数派だと思う方に一斉に指を指してください。もし、２回目も同票が複数人いた場合少数派の勝ちとなります。");
        var okButton = createButton(gameView,"OK");
        action(okButton,function () {
               result();
               });
    }
    function result(){
        alertView("少数派が決まりましたか？決まったら「OKボタン」を押してください。それぞれのお題が確認できます。");
        var okButton = createButton(gameView,"OK");
        action(okButton,function () {
               resultAll();
               });
    }
    function resultAll() {
        var resultAllView = alertView("結果");
        for(var i = 0;i < data["players"].length;i++) {
            create(data["players"][i]["name"]+":"+data["players"][i]["item"]);
        }
        
        var okButton = createButton(gameView,"OK");
        action(okButton,function () {
               clearView();
               firstView();
               });
    }
    
    
    firstView();
    
    
    
    
    // スクリーンの初期化
    screenCanvas = document.getElementById('screen');
    screenCanvas.width = 256;
    screenCanvas.height = 256;
    
    // イベントの登録
    screenCanvas.addEventListener('mousemove', mouseMove, true);
    window.addEventListener('keydown', keyDown, true);

    // イベントの登録
    gameView.addEventListener('mousemove', gameMouseMove, true);
    // エレメント関連
    info = document.getElementById('info');
    
    // ループ処理を呼び出す
    (function(){
     // HTMLを更新
     info.innerHTML = mouse.x + ' : ' + mouse.y + ' / ' + gameMouse.x + ' : ' + gameMouse.y;
     
     // フラグにより再帰呼び出し
     if(run){setTimeout(arguments.callee, fps);}
     })();
};

// - event --------------------------------------------------------------------
function mouseMove(event){
    // マウスカーソル座標の更新
    mouse.x = event.clientX - screenCanvas.offsetLeft;
    mouse.y = event.clientY - screenCanvas.offsetTop;
}

function gameMouseMove(event){
    // マウスカーソル座標の更新
    gameMouse.x = event.clientX - gameView.offsetLeft;
    gameMouse.y = event.clientY - gameView.offsetTop;
}

function keyDown(event){
    // キーコードを取得
    var ck = event.keyCode;
    
    // Escキーが押されていたらフラグを降ろす
    if(ck === 27){run = false;}
}

