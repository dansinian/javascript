/**
 * Created by Administrator on 2016/11/28.
 */
var data=["Phone5","Ipad","三星笔记本","佳能相机","惠普打印机","50元充值卡","1000元超市购物卷","谢谢参与"],
    title=document.getElementById("title"),
    play=document.getElementById("play"),
    stop=document.getElementById("stop"),
    timer=null,
    flag=true;

window.onload=function()
//开始抽奖
    play.onclick=palyFun;
//停止抽奖
    stop.onclick=stopFun;
//键盘事件
paly.onkeyup=function (event) {
    event=event||window.event;
     if(event.keyCode==13) {
         if(flag) {
            playFun();
            flag=false;
         }else {
            stopFun();
            flag=true;
         }
     }
  }
}

function playFun() {
    clearInterval(timer);
    timer=setInterval(function () {
        var random=Math.floor(Math.random()*data.length);
        title.innerHTML=data[random];
    },50);
    paly.style.background="#999";
}

function stopFun() {
    clearInterval(timer);
    play.style.background="#036";
}