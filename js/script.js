window.onload=function () {
/*  let date=new Date('10:00:00 12/16/2017');
  let date1=new Date(2017,10,20,10,30,20);
  console.log(date,date1);*/

    let date=new Date(2017,11,25,12,0,0);
    let sd=document.querySelector('.box>span:nth-child(1)');
    let sh=document.querySelector('.box>span:nth-child(2)');
    let sm=document.querySelector('.box>span:nth-child(3)');
    let ss=document.querySelector('.box>span:nth-child(4)');
    // console.log(sd,sh,sm,ss);
    let now=new Date();
    let time=Math.floor((date.getTime()-now.getTime())/1000);
    let days=Math.floor(time/60/60/24);
    times=time%(60*60*24);
    let hour=Math.floor(times/60/60);
    hours=times%(60*60);
    let Mi=Math.floor(hours/60);
    Mis=hours%60;
    let second=Math.floor(Mis);
    console.log(days,hour,Mi,second);
    sd.innerText=`${days} 天`;
    sh.innerText=`${hour} 时`;
    sm.innerText=`${Mi} 分`;
    ss.innerText=`${second} 秒`;

    setInterval(function () {
        let now=new Date();
        let time=Math.floor((date.getTime()-now.getTime())/1000);
        let days=Math.floor(time/60/60/24);
        times=time%(60*60*24);
        let hour=Math.floor(times/60/60);
        hours=times%(60*60);
        let Mi=Math.floor(hours/60);
        Mis=hours%60;
        let second=Math.floor(Mis);
        console.log(days,hour,Mi,second);
        sd.innerText=`${days} 天`;
        sh.innerText=`${hour} 时`;
        sm.innerText=`${Mi} 分`;
        ss.innerText=`${second} 秒`;
    },1000);


    let spans=document.querySelectorAll('.box2>span');
    djs(10);
    function djs(num) {
        date1=new Date();
        date1.setMinutes(date1.getMinutes()+num);
        move1();
        setInterval(move1,1000);
    }
    function move1() {
        let arr=[];
        let now1=new Date();
        let time1=Math.floor((date1.getTime()-now1.getTime())/1000);
        times1=time1%(60*60);
        let M=Math.floor(times1/60);
        arr.push(M);
        Ms=time1%60;
        let S=Math.floor((Ms));
        arr.push(S);
        spans.forEach((element,index)=>{
            element.innerText=`${arr[index]}`;
        })

    }
};

